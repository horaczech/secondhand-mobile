import React, {useEffect} from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StoreProps} from '../ts/interfaces';
import {AppDispatch} from '../app/store';
import BottomTabNavigator from './tabs/BottomTabNavigator';
import {COLORS, DARK_COLORS} from '../constants/Colors';
import {setTheme} from '../utils/user';

const {Navigator, Screen} = createStackNavigator();

const Navigation: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const OSActiveColorScheme = useColorScheme();

    useEffect(() => {
        if (OSActiveColorScheme) {
            dispatch(setTheme(OSActiveColorScheme));
        }
    }, [OSActiveColorScheme]);

    const options = {
        headerShown: false,
    };

    DefaultTheme.colors.background = COLORS.background;
    DarkTheme.colors.background = DARK_COLORS.background;

    return (
        <>
            <StatusBar barStyle={activeTheme.dark ? 'light-content' : 'dark-content'} translucent />
            <NavigationContainer theme={!activeTheme.dark ? DefaultTheme : DarkTheme}>
                <Navigator initialRouteName="AppBottomNavigator">
                    <Screen name="AppBottomNavigator" component={BottomTabNavigator} options={options} />
                </Navigator>
            </NavigationContainer>
        </>
    );
};

export default Navigation;
