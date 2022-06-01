import React from 'react';
import {StoreProps} from '../ts/interfaces';
import ActivityIndicator from '../components/ActivityIndicator';
import ProductsList from '../components/shop/ProductsList';
import {useSelector} from 'react-redux';

const HomeScreen: React.FC = () => {
    const {allProducts} = useSelector((state: StoreProps) => state.products);

    return (
        <>
            {allProducts ? (
                <ProductsList products={allProducts} headerComponentType="categories" />
            ) : (
                <ActivityIndicator />
            )}
        </>
    );
};

export default HomeScreen;
