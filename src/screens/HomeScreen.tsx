import React, {useRef} from 'react';
import {StoreProps} from '../ts/interfaces';
import ActivityIndicator from '../components/ActivityIndicator';
import ProductsList from '../components/shop/ProductsList';
import {useSelector} from 'react-redux';
import Layout from '../components/Layout';
import {FlatList} from 'react-native';

const HomeScreen: React.FC = () => {
    const {allProducts, searchedProducts} = useSelector((state: StoreProps) => state.products);
    const productListRef = useRef<FlatList | null>(null);

    return (
        <Layout>
            {allProducts ? (
                <ProductsList
                    ref={productListRef}
                    products={searchedProducts || allProducts}
                    headerComponentType="categories"
                    isHomeScreen
                />
            ) : (
                <ActivityIndicator />
            )}
        </Layout>
    );
};

export default HomeScreen;
