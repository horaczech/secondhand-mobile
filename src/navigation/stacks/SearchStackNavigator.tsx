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

const {Navigator, Screen} = createStackNavigator();

const SearchStackNavigator = () => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const {activeCategory} = useSelector((state: StoreProps) => state.categories);
    const dispatch = useDispatch<AppDispatch>();
    const {t} = useTranslation();

    const options = ({navigation}: {navigation: NavigationProp<'Home'>}) => ({
        headerLeft: () => <HeaderBackButton navigation={navigation} label={t('general.back')} />,
        headerStyle: {
            backgroundColor: activeTheme.colors.primary,
        },
        headerRight: () => (
            <Button title="Theme" onPress={() => dispatch(setTheme(activeTheme.dark ? 'light' : 'dark'))} />
        ),
        headerTintColor: '#fff',
        title: undefined,
    });

    const categoryOptions = ({navigation}: {navigation: NavigationProp<'Home'>}) => ({
        headerLeft: () => <HeaderBackButton navigation={navigation} label={t('general.back')} />,
        headerStyle: {
            backgroundColor: activeTheme.colors.primary,
        },
        hideWhenScrolling: true,
        headerRight: () => (
            <Button title="Theme" onPress={() => dispatch(setTheme(activeTheme.dark ? 'light' : 'dark'))} />
        ),
        headerTintColor: '#fff',
        title: activeCategory && shortenText(activeCategory.title.cs, Number(screenWidth()) > 375 ? 20 : 14),
    });

    const noHeaderOptions = {
        headerShown: false,
    };

    return (
        <Navigator initialRouteName="HomeScreen">
            <Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    // headerTitle: () => <Image source={require('../../../assets/logoo.png')} />,
                    // headerStyle: {
                    //     backgroundColor: activeTheme.colors.primary,
                    // },
                    // headerRight: () => (
                    //     <Button title="Theme" onPress={() => dispatch(setTheme(activeTheme.dark ? 'light' : 'dark'))} />
                    // ),
                    // headerTintColor: '#fff',
                    headerShown: false,
                }}
            />
            <Screen name="ProductDetailScreen" component={ProductDetailScreen} options={noHeaderOptions} />
            <Screen name="CategoryScreen" component={CategoryScreen} options={categoryOptions} />
        </Navigator>
    );
};

export default SearchStackNavigator;
