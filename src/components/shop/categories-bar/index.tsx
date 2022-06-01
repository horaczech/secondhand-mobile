import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../styles/global';
import OneCategory from './OneCategory';
import {CATEGORIES} from '../../../demo/data';
import {useTranslation} from 'react-i18next';
import {CategoryType} from '../../../ts/types';
import {useNavigation} from '@react-navigation/native';
import {DEFAULT_MARGINS, RADIUSES} from '../../../constants/style';
import {useDispatch, useSelector} from 'react-redux';
import {StoreProps} from '../../../ts/interfaces';
import Pressable from '../../ui/Pressable';
import Text from '../../ui/Text';
import {setActiveCategory} from '../../../app/categoriesSlice';
import {setCategoryProducts} from '../../../app/productsSlice';

const CategoriesBar = () => {
    const {i18n} = useTranslation();
    const navigation = useNavigation();
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const [allCategories, setAllCategories] = useState(false);

    const dispatch = useDispatch();

    const getTitle = (category: CategoryType) => {
        if (Object.keys(category.title).indexOf(i18n.language) !== -1) {
            return category.title[i18n.language];
        }
        return '';
    };

    const openCategory = (categoryId: number) => {
        dispatch(setActiveCategory({categoryId}));
        dispatch(setCategoryProducts({categoryId}));
        navigation.navigate('CategoryScreen', {categoryId});
    };

    return (
        <View
            style={[
                globalStyles.row,
                styles.bar,
                {borderBottomColor: activeTheme.colors.separator},
                allCategories ? null : {maxHeight: 2 * 44 + DEFAULT_MARGINS.medium},
            ]}>
            {CATEGORIES.map(category => (
                <OneCategory key={category.id} title={getTitle(category)} onPress={() => openCategory(category.id)} />
            ))}
            <Pressable
                style={[
                    styles.showAllButton,
                    globalStyles.alignCenter,
                    globalStyles.justifyCenter,
                    {borderColor: activeTheme.colors.separator},
                ]}
                onPress={() => setAllCategories(!allCategories)}>
                <Text className="h4">{allCategories ? 'x' : `+ 7`}</Text>
            </Pressable>
        </View>
    );
};

export default CategoriesBar;

const styles = StyleSheet.create({
    bar: {
        flexWrap: 'wrap',
        paddingBottom: DEFAULT_MARGINS.medium,
        borderBottomWidth: 1,
        overflow: 'hidden',
        zIndex: 1,
        paddingRight: 40,
    },
    showAllButton: {
        position: 'absolute',
        right: DEFAULT_MARGINS.small,
        bottom: DEFAULT_MARGINS.small,
        borderRadius: RADIUSES.medium,
        borderWidth: 1,
        padding: DEFAULT_MARGINS.small,
        minWidth: 30,
    },
});
