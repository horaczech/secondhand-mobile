import React from 'react';
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorParamList} from '../../ts/types';
import MainStackNavigator from '../stacks/MainStackNavigator';
import {useSelector} from 'react-redux';
import {StoreProps} from '../../ts/interfaces';
import HomeIcon from '@assets/images/tab-icons/home.svg';
import SearchIcon from '@assets/images/tab-icons/search.svg';
import {useTranslation} from 'react-i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {Navigator, Screen} = createBottomTabNavigator<NavigatorParamList>();

const BottomTabNavigator: React.FC = () => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const inset = useSafeAreaInsets();
    const {t} = useTranslation();

    const barOptions: BottomTabNavigationOptions = {
        headerShown: false,
        headerTitle: () => null,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: activeTheme.colors.primary,
        tabBarInactiveTintColor: activeTheme.colors.bottomIcon,
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {
            backgroundColor: activeTheme.colors.background,
            borderTopColor: activeTheme.colors.separator,
            borderTopWidth: 1,
            height: 50 + inset.bottom,
        },
    };
    return (
        <>
            <Navigator initialRouteName="MainStack" screenOptions={barOptions}>
                <Screen
                    name="MainStack"
                    component={MainStackNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <HomeIcon
                                width={20}
                                height={20}
                                stroke={focused ? activeTheme.colors.primary : activeTheme.colors.bottomIcon}
                            />
                        ),
                        tabBarLabel: t('bottom_tabs.home'),
                    }}
                />
                <Screen
                    name="SearchStack"
                    component={MainStackNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <SearchIcon
                                width={20}
                                height={20}
                                stroke={focused ? activeTheme.colors.primary : activeTheme.colors.bottomIcon}
                            />
                        ),
                        tabBarLabel: t('bottom_tabs.search'),
                    }}
                />
            </Navigator>
        </>
    );
};

export default BottomTabNavigator;
