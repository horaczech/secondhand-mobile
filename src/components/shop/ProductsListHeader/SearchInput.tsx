import React from 'react';
import {StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import SearchIcon from '@assets/images/tab-icons/search.svg';
import {DEFAULT_OFFSETS, RADIUSES} from '../../../constants/style';
import {m} from '../../../utils/style-helpers';
import {useSelector} from 'react-redux';
import {StoreProps} from '../../../ts/interfaces';
import {screenWidth} from '../../../utils/screen';

interface Props extends TextInputProps {
    showBackButton?: boolean;
    containerStyle?: ViewStyle;
}

const SearchInput: React.FC<Props> = ({containerStyle, ...otherProps}) => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    return (
        <View style={[containerStyle || null]}>
            <SearchIcon style={[styles.searchIcon]} width={14} height={14} stroke={activeTheme.colors.bottomIcon} />
            <TextInput
                placeholderTextColor={activeTheme.colors.loadingSpinner}
                {...otherProps}
                style={[
                    styles.searchInput,
                    {
                        borderColor: activeTheme.colors.separator,
                        backgroundColor: activeTheme.dark ? activeTheme.colors.lightGrey : 'rgba(0, 0, 0, 0.01)',
                        color: activeTheme.colors.text,
                        paddingLeft: 30,
                    },
                ]}
            />
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    searchIcon: {
        position: 'absolute',
        left: 20,
        top: '50%',
        transform: [{translateY: -0.5}],
    },
    searchInput: {
        // width: '100%',
        borderRadius: RADIUSES.small,
        borderWidth: 1,
        ...m('medium', 't'),
        ...m('medium', 'h'),
        paddingHorizontal: DEFAULT_OFFSETS.medium,
        height: 40,
        fontSize: 14,
        overflow: 'visible',
        alignContent: 'center',
        textAlignVertical: 'center',
    },
});
