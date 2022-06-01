import React, {useEffect, useState} from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert, useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StoreProps} from '../ts/interfaces';
import {AppDispatch} from '../app/store';
import BottomTabNavigator from './tabs/BottomTabNavigator';
import {COLORS} from '../constants/Colors';
import {Appearance} from 'react-native';

const {Navigator, Screen} = createStackNavigator();

const Navigation = () => {
    const [themeChecked, setThemeChecked] = useState(false);
    const scheme = useColorScheme();
    const dispatch = useDispatch<AppDispatch>();
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const colorScheme = Appearance.getColorScheme();

    useEffect(() => {
        // if (!themeChecked)
    }, [themeChecked, scheme]);

    const options = {
        headerShown: false,
    };

    DefaultTheme.colors.background = COLORS.background;

    return (
        <NavigationContainer theme={!activeTheme.dark ? DefaultTheme : DarkTheme}>
            <Navigator initialRouteName="AppBottomNavigator">
                <Screen name="AppBottomNavigator" component={BottomTabNavigator} options={options} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
