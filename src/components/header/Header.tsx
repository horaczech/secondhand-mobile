import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/Colors';

const Header: React.FC = () => {
    const inset = useSafeAreaInsets();

    return <View style={[styles.header, {paddingTop: inset.top + 20}]} />;
};

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary,
        height: 60,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
});
