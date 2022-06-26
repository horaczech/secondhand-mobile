import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {m} from '../../utils/style-helpers';
import {NavigationProp} from '@react-navigation/native';
import BackIcon from '@assets/images/back.svg';
import {DEFAULT_OFFSETS} from '../../constants/style';

interface Props {
    navigation: NavigationProp<''>;
    label: string;
}

const HeaderBackButton: React.FC<Props> = ({navigation, label}) => {
    return (
        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
            <BackIcon width={24} height={24} stroke={COLORS.background} />
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
};

export default HeaderBackButton;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: DEFAULT_OFFSETS.small,
    },
    text: {
        color: COLORS.background,
        fontSize: 17,
        fontWeight: '600',
        ...m('small', 'l'),
    },
});
