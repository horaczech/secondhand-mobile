import React, {useState} from 'react';
import {Image, RefreshControl, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreProps} from '../ts/interfaces';
import {MainStackParamList, NavigatorParamList} from '../ts/types';
import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import ActivityIndicator from '../components/ActivityIndicator';
import IconButton from '../components/ui/IconButton';
import {DEFAULT_OFFSETS, ICON_SIZES, RADIUSES} from '../constants/style';
import BackIcon from '@assets/images/back.svg';
import ShareIcon from '@assets/images/share.svg';
import {isValidUri, productUrl, share} from '../utils/network';
import {globalStyles} from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';
import NoImageIcon from '@assets/images/placeholders/no-image.svg';
import Text from '../components/ui/Text';
import {m} from '../utils/style-helpers';
import {screenWidth} from '../utils/screen';
import {useTranslation} from 'react-i18next';
import {getCategoryById} from '../utils/product';
import ShoppingListIcon from '@assets/images/icons/shopping-list.svg';
import ProductActionButton from '../components/ui/ProductActionButton';
import Pressable from '../components/ui/Pressable';

const ProductDetailScreen: React.FC = () => {
    const {activeProduct} = useSelector((state: StoreProps) => state.products);
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const route = useRoute<RouteProp<MainStackParamList, 'ProductDetailScreen'>>();
    const {productId} = route.params;
    const {t} = useTranslation();

    const {allCategories} = useSelector((state: StoreProps) => state.categories);

    const [isRefreshing, setIsRefreshing] = useState(false);

    const navigation = useNavigation<NavigationProp<MainStackParamList>>();
    const {i18n} = useTranslation();

    const refreshHandler = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 200);
    };

    const category = activeProduct ? getCategoryById(activeProduct.category, allCategories) : null;

    const shareMessage = () => {
        return `${activeProduct?.title} ${category ? `- ${category.title[i18n.language]} ` : ''}| Secondhand`;
    };

    const shareHandler = async () => {
        if (activeProduct) {
            await share({message: shareMessage(), url: productUrl({id: activeProduct.id, slug: activeProduct.slug})});
        }
    };

    return (
        <>
            <StatusBar barStyle={activeTheme.dark ? 'light-content' : 'dark-content'} translucent />
            <View>
                {activeProduct && productId === activeProduct.id ? (
                    <ScrollView
                        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshHandler} />}>
                        <IconButton
                            style={[styles.headerButton, {left: DEFAULT_OFFSETS.large}]}
                            onPress={() => navigation.goBack()}>
                            <BackIcon width={24} height={24} stroke={activeTheme.colors.text} />
                        </IconButton>
                        <IconButton
                            style={[styles.headerButton, {right: DEFAULT_OFFSETS.large}]}
                            onPress={shareHandler}>
                            <ShareIcon width={24} height={24} fill={activeTheme.colors.text} />
                        </IconButton>
                        {isValidUri(activeProduct.image) ? (
                            <Image style={styles.heroImage} source={{uri: activeProduct.image}} />
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
                                {activeProduct.title}
                            </Text>
                            <Text className="h3" style={[m('large', 'b')]}>
                                {activeProduct.description}
                            </Text>
                            <ScrollView
                                horizontal
                                contentContainerStyle={[globalStyles.justifyBetween, {flexGrow: 1}, m('large', 'b')]}
                                showsHorizontalScrollIndicator={false}>
                                <ProductActionButton
                                    style={m('large', 'r')}
                                    text="Na seznam"
                                    Icon={
                                        <ShoppingListIcon
                                            width={ICON_SIZES.medium}
                                            height={ICON_SIZES.medium}
                                            stroke={activeTheme.colors.text}
                                        />
                                    }
                                />
                                <ProductActionButton
                                    text="Sdílet"
                                    onPress={shareHandler}
                                    Icon={
                                        <ShareIcon
                                            width={ICON_SIZES.medium}
                                            height={ICON_SIZES.medium}
                                            fill={activeTheme.colors.text}
                                        />
                                    }
                                />
                            </ScrollView>
                            <View
                                style={{
                                    borderTopWidth: 1,
                                    borderTopColor: activeTheme.colors.separator,
                                    paddingTop: DEFAULT_OFFSETS.large,
                                    paddingBottom: DEFAULT_OFFSETS.large,
                                }}>
                                <Text className="h2">{t('products.author')}</Text>
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate('ProfileScreen', {userId: activeProduct.user.id})
                                    }
                                    style={[globalStyles.row, globalStyles.alignCenter, styles.userInfo]}>
                                    <Text className="h3" style={[globalStyles['600'], m('large', 'r')]}>
                                        {activeProduct.user.name}
                                    </Text>
                                    <Image source={{uri: activeProduct.user.image}} style={styles.userImage} />
                                </Pressable>
                            </View>
                        </View>
                    </ScrollView>
                ) : (
                    <ActivityIndicator />
                )}
            </View>
        </>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
    text: {
        color: 'red',
    },
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
        justifyContent: 'flex-end',
    },
    userImage: {
        width: 52,
        height: 52,
        borderRadius: RADIUSES.medium,
    },
});
