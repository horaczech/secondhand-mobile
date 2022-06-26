import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type MainStackParamList = {
    HomeScreen: undefined;
    CategoryScreen: {categoryId: number};
    ProductDetailScreen: {productId: number};
    ProfileScreen: {userId: number};
};

export type ThemeType = 'light' | 'dark';

export type ActiveThemeType = {
    dark: boolean;
    colors: ThemeColorsType;
};

export type MarginType = number | string;

export type DefaultMarginsArgType = 'small' | 'medium' | 'large' | 'xl';

export type MarginHelpersValueType = DefaultMarginsArgType | MarginType;

export type DefaultOffsetsType = {
    [key in DefaultMarginsArgType]: number;
};

export type AsyncStorageKeysType = 'selectedTheme';

export type ProductType = {
    id: number;
    title: string;
    slug: string;
    price: {
        currency: string;
        value: number;
    };
    description: string;
    image: string;
    category: number;
    user: {
        name: string;
        username: string;
        id: number;
        image: string;
    };
};

export type CategoryType = {
    id: number;
    slug: string;
    title: {
        [x: string]: string;
    };
};

export type ThemeColorsType = {
    primary: string;
    background: string;
    separator: string;
    text: string;
    bottomIcon: string;
    lightGrey: string;
    loadingSpinner: string;
    invisibleBorder: string;
};

export type TextClassNameType = 'text' | 'h1' | 'h2' | 'h3' | 'h4';

export type MarginSidesType = 't' | 'r' | 'b' | 'l' | 'v' | 'h';

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type ErrorType = null | string;

export type NavigatorParamList = {
    MainStack: undefined;
    SearchStack: undefined;
};

export type ActiveProfile = {
    id: number;
    name: string;
    image: string;
};
