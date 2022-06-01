import React from 'react';
import ProductsList from '../components/shop/ProductsList';
import {useSelector} from 'react-redux';
import {StoreProps} from '../ts/interfaces';

const CategoryScreen: React.FC = () => {
    const {categoryProducts} = useSelector((state: StoreProps) => state.products);
    return <ProductsList products={categoryProducts} />;
};

export default CategoryScreen;
