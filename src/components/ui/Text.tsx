import React from 'react';
import {Text as DefaultText, TextProps} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreProps} from '../../ts/interfaces';
import {TextClassNameType} from '../../ts/types';
import {styleFromClassName} from '../../utils/style-helpers';

interface Props extends TextProps {
    className?: TextClassNameType;
}

const Text: React.FC<Props> = props => {
    const {children, style, className} = props;
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    return (
        <DefaultText
            {...props}
            style={[{color: activeTheme.colors.text}, styleFromClassName(className), style || null]}>
            {children}
        </DefaultText>
    );
};

export default React.memo(Text);
