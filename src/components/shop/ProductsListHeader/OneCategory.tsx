import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {globalStyles} from '../../../styles/global';
import Text from '../../ui/Text';
import {m} from '../../../utils/style-helpers';
import {DEFAULT_OFFSETS, OPACITIES, RADIUSES} from '../../../constants/style';
import {useSelector} from 'react-redux';
import {StoreProps} from '../../../ts/interfaces';

interface Props {
    onPress: () => void;
    title: string;
    icon?: string;
}

const OneCategory = ({title, onPress}: Props) => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    return (
        <Pressable
            style={({pressed}) => [
                pressed ? {opacity: OPACITIES.pressable} : null,
                globalStyles.alignCenter,
                globalStyles.row,
                styles.category,
                {backgroundColor: activeTheme.colors.lightGrey},
            ]}
            onPress={onPress}>
            {/* IMAGE */}
            <Text style={{fontSize: 14, lineHeight: 18}}>{title}</Text>
        </Pressable>
    );
};

export default OneCategory;

const styles = StyleSheet.create({
    category: {
        paddingHorizontal: DEFAULT_OFFSETS.large,
        ...m('small'),
        marginBottom: 0,
        borderRadius: RADIUSES.large,
        height: 34,
    },
});
