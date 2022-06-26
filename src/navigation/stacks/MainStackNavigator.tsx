import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import ProductDetailScreen from '../../screens/ProductDetailScreen';
import {setTheme} from '../../utils/user';
import {useDispatch, useSelector} from 'react-redux';
import {StoreProps} from '../../ts/interfaces';
import {AppDispatch} from '../../app/store';
import {NavigationProp} from '@react-navigation/native';
import HeaderBackButton from '../../components/header/HeaderBackButton';
import CategoryScreen from '../../screens/CategoryScreen';
import {useTranslation} from 'react-i18next';
import {shortenText} from '../../utils';
import {screenWidth} from '../../utils/screen';
import {noHeaderOptions} from '../../constants/navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../../screens/ProfileScreen';

const {Navigator, Screen} = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const {activeCategory} = useSelector((state: StoreProps) => state.categories);
    const dispatch = useDispatch<AppDispatch>();
    const {t} = useTranslation();

    return (
        <Navigator initialRouteName="HomeScreen">
            <Screen name="HomeScreen" component={HomeScreen} options={noHeaderOptions} />
            <Screen name="ProductDetailScreen" component={ProductDetailScreen} options={noHeaderOptions} />
            <Screen name="CategoryScreen" component={CategoryScreen} options={noHeaderOptions} />
            <Screen name="ProfileScreen" component={ProfileScreen} options={noHeaderOptions} />
        </Navigator>
    );
};

export default MainStackNavigator;
