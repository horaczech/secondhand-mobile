import React, {useEffect} from 'react';
import ProductsList from '../components/shop/ProductsList';
import {useSelector} from 'react-redux';
import {StoreProps} from '../ts/interfaces';
import Layout from '../components/Layout';
import ActivityIndicator from '../components/ActivityIndicator';

const CategoryScreen: React.FC = () => {
    const {categoryProducts, searchedCategoryProducts} = useSelector((state: StoreProps) => state.products);
    const {activeCategory} = useSelector((state: StoreProps) => state.categories);

    return (
        <Layout>
            {categoryProducts ? (
                <ProductsList
                    products={searchedCategoryProducts || categoryProducts}
                    headerComponentType="search-only"
                />
            ) : (
                <ActivityIndicator />
            )}
        </Layout>
    );
};

export default CategoryScreen;
