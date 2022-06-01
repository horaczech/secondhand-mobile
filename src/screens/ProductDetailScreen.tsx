import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreProps} from '../ts/interfaces';
import {MainStackParamList} from '../ts/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import ActivityIndicator from '../components/ActivityIndicator';
import ProductDetail from '../components/shop/ProductDetail';

const ProductDetailScreen: React.FC = () => {
    const {activeProduct} = useSelector((state: StoreProps) => state.products);
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const route = useRoute<RouteProp<MainStackParamList, 'ProductDetailScreen'>>();
    const {productId} = route.params;

    return (
        <>
            <StatusBar barStyle={activeTheme.dark ? 'light-content' : 'dark-content'} translucent />
            <View style={styles.container}>
                {activeProduct && productId === activeProduct.id ? (
                    <ProductDetail product={activeProduct} />
                ) : (
                    <ActivityIndicator />
                )}
            </View>
        </>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
    container: {},
    text: {
        color: 'red',
    },
});
