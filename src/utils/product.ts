import {CategoriesStateProps} from '../ts/interfaces';

export const getCategoryById = (id: number, categories: CategoriesStateProps['allCategories']) => {
    return categories?.find(category => category.id === id);
};
