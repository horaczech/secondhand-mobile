import React, {useState} from 'react';
import {ProductType} from '../../ts/types';
import Text from '../ui/Text';
import {Image, RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {screenWidth} from '../../utils/screen';
import {m} from '../../utils/style-helpers';
import NoImageIcon from '@assets/images/placeholders/no-image.svg';
import {globalStyles} from '../../styles/global';
import {useSelector} from 'react-redux';
import {StoreProps} from '../../ts/interfaces';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '@assets/images/back.svg';
import ShareIcon from '@assets/images/share.svg';
import IconButton from '../ui/IconButton';
import {DEFAULT_MARGINS} from '../../constants/style';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import {APP_URL} from 'react-native-dotenv';
import {isValidUri, productUrl, share} from '../../utils/network';

interface Props {
    product: ProductType;
}

const ProductDetail = ({product}: Props) => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const navigation = useNavigation();

    const refreshHandler = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 200);
    };

    const shareHandler = async () => {
        await share({message: product.title, url: productUrl({id: product.id, slug: product.slug})});
    };

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshHandler} />}>
            <IconButton
                style={[styles.headerButton, {left: DEFAULT_MARGINS.large}]}
                onPress={() => navigation.goBack()}>
                <BackIcon width={24} height={24} stroke={activeTheme.colors.text} />
            </IconButton>
            <IconButton style={[styles.headerButton, {right: DEFAULT_MARGINS.large}]} onPress={() => shareHandler()}>
                <ShareIcon width={24} height={24} fill={activeTheme.colors.text} />
            </IconButton>
            {isValidUri(product.image) ? (
                <Image style={styles.heroImage} source={{uri: product.image}} />
            ) : (
                <View style={[styles.heroImage, globalStyles.center]}>
                    <LinearGradient
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 1}}
                        colors={[
                            activeTheme.dark ? 'rgb(20, 20, 20)' : 'rgb(220, 220, 220)',
                            activeTheme.colors.background,
                        ]}
                        style={globalStyles.fullAbsolute}></LinearGradient>
                    <NoImageIcon fill={activeTheme.colors.separator} width={60} height={60} />
                </View>
            )}
            <View style={[styles.content]}>
                <Text className="h1" style={m('large', 'b')}>
                    {product.title}
                </Text>
                <Text className="h3" style={[m('large', 'b')]}>
                    {product.description}
                </Text>
                <View
                    style={[
                        globalStyles.row,
                        globalStyles.justifyBetween,
                        styles.userInfo,
                        {borderTopWidth: 1},
                        {borderTopColor: activeTheme.colors.separator},
                    ]}>
                    <Text>Jméno</Text>
                    <Text>Jméno</Text>
                    <Text>Jméno</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    heroImage: {
        height: screenWidth(),
    },
    content: {
        ...m('large'),
    },
    headerButton: {
        position: 'absolute',
        top: 50,
    },
    userInfo: {
        paddingTop: DEFAULT_MARGINS.large,
    },
});
