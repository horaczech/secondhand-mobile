import {StackScreenProps} from '@react-navigation/stack';
import {
    ActiveThemeType,
    CategoryType,
    ErrorType,
    MainStackParamList,
    ProductType,
    StatusType,
    ThemeColorsType,
    ThemeType,
} from './types';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackScreenProps<T extends keyof MainStackParamList> = StackScreenProps<MainStackParamList, T>;

export interface HomeScreenProps {
    navigation: NativeStackNavigationProp<MainStackParamList, 'ProductDetailScreen'>;
}

export interface ProductDetailScreenProps {
    route: NativeStackNavigationProp<MainStackParamList, 'ProductDetailScreen'>;
}

export interface ThemeStateProps {
    activeTheme: ActiveThemeType;
    status: StatusType;
    error: ErrorType;
}

export interface ProductsStateProps {
    allProducts: ProductType[] | null;
    categoryProducts: ProductType[] | null;
    activeProduct: ProductType | null;
}

export interface StoreProps {
    theme: ThemeStateProps;
    products: ProductsStateProps;
    categories: CategoriesStateProps;
}

export interface CategoriesStateProps {
    allCategories: CategoryType[] | null;
    activeCategory: CategoryType | null;
}
