import React from 'react';
import {Pressable as DefaultPressable, PressableProps, StyleProp, ViewStyle} from 'react-native';
import {OPACITIES} from '../../constants/style';

interface Props extends PressableProps {
    style?: StyleProp<ViewStyle>;
}

const Pressable: React.FC<Props> = ({onPress, style, children}) => {
    return (
        <DefaultPressable
            style={({pressed}) => [pressed ? {opacity: OPACITIES.pressable} : null, style || null]}
            onPress={onPress}>
            {children}
        </DefaultPressable>
    );
};

export default Pressable;
