import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {BREAKPOINTS, DEFAULT_OFFSETS, LINE_HEIGHTS, OPACITIES, RADIUSES} from '../../constants/style';
import {screenWidth} from '../../utils/screen';
import {globalStyles} from '../../styles/global';
import {m} from '../../utils/style-helpers';
import {ProductType} from '../../ts/types';
import {useSelector} from 'react-redux';
import {StoreProps} from '../../ts/interfaces';
import Text from '../ui/Text';
import HomeSVG from '@assets/images/tab-icons/home.svg';
import NoImageIcon from '@assets/images/placeholders/no-image.svg';
import {isValidUri} from '../../utils/network';

interface Props {
    product: ProductType;
    onPress?: (x?: any, y?: any) => void;
    firstItem?: boolean;
    lastItem?: boolean;
}

const ProductsListItem: React.FC<Props> = ({product, onPress, firstItem, lastItem}) => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);

    const shortDescription = () => {
        if (product.description.length > 0) {
            const desc = product.description.slice(0, 70).split('');
            const charsToDelete = [',', ' '];
            if (charsToDelete.indexOf(desc[desc.length - 1]) !== -1) {
                desc[desc.length - 1] = '';
            }
            if (charsToDelete.indexOf(desc[desc.length - 2]) !== -1) {
                desc[desc.length - 2] = '';
            }
            return `${desc.join('')}...`;
        }
    };
    return (
        <Pressable
            style={({pressed}) => [
                pressed ? {opacity: OPACITIES.pressable} : null,
                {backgroundColor: activeTheme.colors.background},
                styles.container,
                globalStyles.row,
                globalStyles.alignCenter,
                {borderTopWidth: !firstItem ? 1 : 0},
                {borderTopColor: activeTheme.colors.separator},
                {borderBottomColor: activeTheme.colors.separator},
                {borderBottomWidth: firstItem && lastItem ? 1 : 0},
            ]}
            onPress={onPress}>
            {isValidUri(product.image) ? (
                <Image source={{uri: product.image}} style={styles.image} />
            ) : (
                <View style={styles.image}>
                    <NoImageIcon fill={activeTheme.colors.separator} width={42} height={42} />
                </View>
            )}
            <View style={[m('large', 'l'), globalStyles.justifyBetween, styles.content]}>
                <HomeSVG />
                <Text style={globalStyles.h2}>{product.title}</Text>
                <Text style={[m('auto', 'b'), styles.price]}>
                    {product.price.value} {product.price.currency}
                </Text>
                <Text style={[globalStyles.text, styles.description]}>{shortDescription()}</Text>
            </View>
        </Pressable>
    );
};

export default ProductsListItem;

const styles = StyleSheet.create({
    container: {
        padding: screenWidth() < BREAKPOINTS.basic ? DEFAULT_OFFSETS.small : DEFAULT_OFFSETS.medium,
        height: 100,
    },
    image: {
        width: 125,
        height: '100%',
        borderRadius: RADIUSES.medium,
        ...globalStyles.center,
    },
    content: {
        height: '100%',
        flex: 1,
    },
    price: {
        fontSize: 16,
    },
    description: {
        height: LINE_HEIGHTS.text * 2,
        overflow: 'hidden',
    },
});
