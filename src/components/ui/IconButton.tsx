import React, {ReactNode} from 'react';
import {PressableProps, StyleProp, StyleSheet, ViewProps, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreProps} from '../../ts/interfaces';
import {globalStyles} from '../../styles/global';
import Pressable from './Pressable';
import {RADIUSES} from '../../constants/style';

interface Props extends PressableProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const IconButton: React.FC<Props> = ({children, ...otherProps}) => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);

    return (
        <Pressable
            {...otherProps}
            style={[
                styles.button,
                globalStyles.center,
                {backgroundColor: activeTheme.colors.background},
                {borderColor: activeTheme.colors.invisibleBorder},
                otherProps.style || null,
            ]}>
            {children}
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: RADIUSES.xl,
        zIndex: 2,
        borderWidth: 1,
        opacity: 0.95,
    },
});
