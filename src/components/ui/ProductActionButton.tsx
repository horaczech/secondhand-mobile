import React, {ReactNode} from 'react';
import {PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Pressable from './Pressable';
import {globalStyles} from '../../styles/global';
import Text from './Text';
import {m} from '../../utils/style-helpers';
import {BREAKPOINTS, DEFAULT_OFFSETS, RADIUSES} from '../../constants/style';
import {useSelector} from 'react-redux';
import {StoreProps} from '../../ts/interfaces';
import {screenWidth} from '../../utils/screen';

interface Props extends PressableProps {
    text: string;
    Icon: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const ProductActionButton: React.FC<Props> = ({text, Icon, style, ...otherProps}) => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);

    return (
        <Pressable
            {...otherProps}
            style={[
                globalStyles.row,
                globalStyles.alignCenter,
                globalStyles.end,
                styles.button,
                {backgroundColor: activeTheme.colors.lightGrey},
                style || null,
            ]}>
            {Icon}
            <Text style={[m('small', 'l')]}>{text}</Text>
        </Pressable>
    );
};

export default ProductActionButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: RADIUSES.large,
        paddingHorizontal: screenWidth() < BREAKPOINTS.basic ? DEFAULT_OFFSETS.medium : DEFAULT_OFFSETS.large,
        paddingVertical: DEFAULT_OFFSETS.small,
    },
});
