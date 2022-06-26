import {StackScreenProps} from '@react-navigation/stack';
import {
    ActiveProfile,
    ActiveThemeType,
    CategoryType,
    ErrorType,
    MainStackParamList,
    ProductType,
    StatusType,
} from './types';

export type MainStackScreenProps<T extends keyof MainStackParamList> = StackScreenProps<MainStackParamList, T>;

export interface ThemeStateProps {
    activeTheme: ActiveThemeType;
    status: StatusType;
    error: ErrorType;
}

export interface ProductsStateProps {
    allProducts: ProductType[] | null;
    categoryProducts: ProductType[] | null;
    activeProduct: ProductType | null;
    searchedProducts: ProductType[] | null;
    searchedCategoryProducts: ProductType[] | null;
}

export interface StoreProps {
    theme: ThemeStateProps;
    products: ProductsStateProps;
    categories: CategoriesStateProps;
    profiles: ProfilesStateProps;
}

export interface CategoriesStateProps {
    allCategories: CategoryType[] | null;
    activeCategory: CategoryType | null;
}

export interface ProfilesStateProps {
    activeProfile: ActiveProfile | null;
}
