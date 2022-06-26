import React, {Ref, useState} from 'react';
import {FlatList, Keyboard, RefreshControl, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import ProductsListItem from './ProductsListItem';
import {useDispatch, useSelector} from 'react-redux';
import {MainStackParamList, ProductType} from '../../ts/types';
import {setActiveProduct} from '../../app/productsSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ProductsListHeader from './ProductsListHeader';
import Text from '../ui/Text';
import {useTranslation} from 'react-i18next';
import {m} from '../../utils/style-helpers';
import {StoreProps} from '../../ts/interfaces';

interface Props {
    products: ProductType[] | null;
    style?: StyleProp<ViewStyle>;
    headerComponentType?: 'categories' | 'search-only';
    ref?: Ref<FlatList> | null;
    isHomeScreen?: boolean;
}

const ProductsList: React.FC<Props> = React.forwardRef(({products, style, headerComponentType, isHomeScreen}, ref) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);

    const navigation = useNavigation<NavigationProp<MainStackParamList>>();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const refreshHandler = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 200);
    };

    const openProduct = (product: ProductType) => {
        dispatch(setActiveProduct({productId: product.id}));
        navigation.navigate('ProductDetailScreen', {productId: product.id});
    };

    const listHeaderHandler = () => {
        switch (headerComponentType) {
            case 'categories':
                return <ProductsListHeader ref={ref} isHomeScreen={isHomeScreen} />;
            case 'search-only':
                return <ProductsListHeader searchOnly ref={ref} isHomeScreen={isHomeScreen} />;
            default:
                return null;
        }
    };
    return (
        <>
            <FlatList
                data={products}
                style={[styles.productsList, style ? style : null]}
                ref={ref}
                onScrollBeginDrag={() => Keyboard.dismiss()}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        tintColor={activeTheme.dark ? activeTheme.colors.loadingSpinner : undefined}
                        onRefresh={refreshHandler}
                    />
                }
                stickyHeaderIndices={[0]}
                ListHeaderComponent={listHeaderHandler()}
                ListEmptyComponent={<Text style={styles.emptyText}>{t('products.empty')}</Text>}
                renderItem={productData => (
                    <ProductsListItem
                        key={productData.item.id}
                        product={productData.item}
                        firstItem={productData.index === 0}
                        lastItem={products ? productData.index === products.length - 1 : false}
                        onPress={() => openProduct(productData.item)}
                    />
                )}
            />
        </>
    );
});

export default ProductsList;

const styles = StyleSheet.create({
    productsList: {
        height: '100%',
        zIndex: 2,
    },
    emptyText: {
        textAlign: 'center',
        ...m('large'),
    },
});
