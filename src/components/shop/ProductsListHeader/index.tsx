import React, {forwardRef, Ref} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import OneCategory from './OneCategory';
import {CATEGORIES} from '../../../demo/data';
import {useTranslation} from 'react-i18next';
import {CategoryType, MainStackParamList} from '../../../ts/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {DEFAULT_OFFSETS, RADIUSES} from '../../../constants/style';
import {useDispatch, useSelector} from 'react-redux';
import {StoreProps} from '../../../ts/interfaces';
import {setActiveCategory} from '../../../app/categoriesSlice';
import {searchProducts, setCategoryProducts} from '../../../app/productsSlice';
import {m} from '../../../utils/style-helpers';
import SearchInput from './SearchInput';
import Pressable from '../../ui/Pressable';
import BackSVG from '@assets/images/back.svg';
import {globalStyles} from '../../../styles/global';
import {screenWidth} from '../../../utils/screen';

interface Props {
    ref: Ref<FlatList> | null;
    searchOnly?: boolean;
    isHomeScreen?: boolean;
}

const ProductsListHeader: React.FC<Props> = forwardRef(({searchOnly, isHomeScreen}, ref) => {
    const {i18n} = useTranslation();
    const navigation = useNavigation<NavigationProp<MainStackParamList>>();
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);
    const {activeCategory} = useSelector((state: StoreProps) => state.categories);
    const dispatch = useDispatch();
    const {t} = useTranslation();

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
    const search = (text: string) => {
        if (isHomeScreen) {
            dispatch(searchProducts({text, type: 'all'}));
        } else {
            dispatch(searchProducts({text, type: 'category', categoryId: activeCategory?.id}));
        }
    };

    return (
        <View
            style={[
                styles.bar,
                {borderBottomColor: activeTheme.colors.separator, backgroundColor: activeTheme.colors.background},
            ]}>
            {!searchOnly ? (
                <FlatList
                    data={CATEGORIES}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.list}
                    renderItem={({item}) => (
                        <OneCategory key={item.id} title={getTitle(item)} onPress={() => openCategory(item.id)} />
                    )}
                />
            ) : null}
            {isHomeScreen ? (
                <SearchInput placeholder={t('general.search')} onChangeText={text => search(text)} />
            ) : (
                <View
                    style={[
                        globalStyles.row,
                        globalStyles.alignCenter,
                        {width: '100%', backgroundColor: activeTheme.colors.background},
                    ]}>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        style={[
                            styles.backButton,
                            globalStyles.justifyCenter,
                            globalStyles.alignCenter,
                            m('medium', 'l'),
                            m('medium', 't'),
                            m(0, 'b'),
                        ]}>
                        <BackSVG width={20} height={20} stroke={activeTheme.colors.text} />
                    </Pressable>
                    <SearchInput
                        placeholder={activeCategory?.title.cs}
                        onChangeText={text => search(text)}
                        containerStyle={{
                            width: screenWidth() - 30 - DEFAULT_OFFSETS.small * 2 - DEFAULT_OFFSETS.medium * 2,
                        }}
                    />
                </View>
            )}
        </View>
    );
});

export default ProductsListHeader;

const styles = StyleSheet.create({
    bar: {
        paddingBottom: DEFAULT_OFFSETS.small,
        zIndex: 1,
    },
    showAllButton: {
        position: 'absolute',
        right: DEFAULT_OFFSETS.small,
        bottom: DEFAULT_OFFSETS.small,
        borderRadius: RADIUSES.medium,
        borderWidth: 1,
        padding: DEFAULT_OFFSETS.small,
        minWidth: 30,
    },
    list: {
        marginHorizontal: DEFAULT_OFFSETS.small,
    },
    backButton: {
        width: 30,
        height: 30,
    },
});
