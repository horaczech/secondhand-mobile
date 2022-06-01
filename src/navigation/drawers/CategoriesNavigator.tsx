import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoryScreen from '../../screens/CategoryScreen';

const {Navigator, Screen} = createDrawerNavigator();

const CategoriesNavigator = () => {
    return (
        <Navigator>
            <Screen name="CategoryScreen" component={CategoryScreen} />
        </Navigator>
    );
};

export default CategoriesNavigator;
