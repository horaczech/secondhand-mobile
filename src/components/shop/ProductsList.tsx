import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import ProductsListItem from './ProductsListItem';
import {useDispatch, useSelector} from 'react-redux';
import {ProductType} from '../../ts/types';
import {setActiveProduct} from '../../app/productsSlice';
import {useNavigation} from '@react-navigation/native';
import CategoriesBar from './categories-bar';
import Text from '../ui/Text';
import {useTranslation} from 'react-i18next';
import {m} from '../../utils/style-helpers';
import {StoreProps} from '../../ts/interfaces';

interface Props {
    products: ProductType[] | null;
    style?: StyleProp<ViewStyle>;
    headerComponentType?: 'categories';
}

const ProductsList = ({products, style, headerComponentType}: Props) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);

    const navigation = useNavigation();
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
                return <CategoriesBar />;
            default:
                return null;
        }
    };
    return (
        <>
            {products && products.length > 0 ? (
                <FlatList
                    data={products}
                    style={[styles.productsList, style ? style : null]}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            tintColor={activeTheme.dark ? activeTheme.colors.loadingSpinner : undefined}
                            onRefresh={refreshHandler}
                        />
                    }
                    ListHeaderComponent={listHeaderHandler()}
                    renderItem={productData => (
                        <ProductsListItem
                            key={productData.item.id}
                            product={productData.item}
                            firstItem={productData.index === 0}
                            onPress={() => openProduct(productData.item)}
                        />
                    )}
                />
            ) : (
                <Text style={styles.emptyText}>{t('products.empty')}</Text>
            )}
        </>
    );
};

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
