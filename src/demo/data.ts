import {CategoryType, ProductType} from '../ts/types';

export const PRODUCTS: ProductType[] = [
    {
        id: 0,
        title: 'Product',
        slug: 'product-1',
        price: {
            currency: 'CZK',
            value: 10000,
        },
        description:
            'Nam turpis, tortor posuere eu ultricies. Quisque porttitor urna dictumst, nibh mattis dictum, libero enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: '',
        category: 1,
    },
    {
        id: 1,
        title: 'Product 2',
        slug: 'product-2',
        price: {
            currency: 'CZK',
            value: 600,
        },
        description:
            'Nam turpis, ro enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/7eNfTzIHREFUlXHWYL6AqF/34415ffe25ec446e37c857ff9f6eea92/AA001LM_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_RELAY_BLIZZARD_NATURAL_BLACK.png',
        category: 1,
    },
    {
        id: 2,
        title: 'Product',
        slug: 'product-3',
        price: {
            currency: 'CZK',
            value: 10000,
        },
        description:
            'Nam turpis, tortor posuere eu ultricies. Quisque porttitor urna dictumst, nibh mattis dictum, libero enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/z0Z7JaTiFmKncrgGOxJp7/24a0b02e2071298fe8da4628fcb7c375/Men_s_Wool_Runners_-_Natural_Grey__Light_Grey_Sole__-_imageAngle',
        category: 2,
    },
    {
        id: 3,
        title: 'Product 2',
        slug: 'product-4',
        price: {
            currency: 'CZK',
            value: 600,
        },
        description:
            'Nam turpis, ro enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/z0Z7JaTiFmKncrgGOxJp7/24a0b02e2071298fe8da4628fcb7c375/Men_s_Wool_Runners_-_Natural_Grey__Light_Grey_Sole__-_imageAngle',
        category: 2,
    },
    {
        id: 4,
        title: 'Product',
        slug: 'product-5',
        price: {
            currency: 'CZK',
            value: 10000,
        },
        description:
            'Nam turpis, tortor posuere eu ultricies. Quisque porttitor urna dictumst, nibh mattis dictum, libero enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/7eNfTzIHREFUlXHWYL6AqF/34415ffe25ec446e37c857ff9f6eea92/AA001LM_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_RELAY_BLIZZARD_NATURAL_BLACK.png',
        category: 1,
    },
    {
        id: 5,
        title: 'Product 2',
        slug: 'product-6',
        price: {
            currency: 'CZK',
            value: 600,
        },
        description:
            'Nam turpis, ro enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/z0Z7JaTiFmKncrgGOxJp7/24a0b02e2071298fe8da4628fcb7c375/Men_s_Wool_Runners_-_Natural_Grey__Light_Grey_Sole__-_imageAngle',
        category: 1,
    },
    {
        id: 6,
        title: 'Product',
        slug: 'product-7',
        price: {
            currency: 'CZK',
            value: 10000,
        },
        description:
            'Nam turpis, tortor posuere eu ultricies. Quisque porttitor urna dictumst, nibh mattis dictum, libero enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/z0Z7JaTiFmKncrgGOxJp7/24a0b02e2071298fe8da4628fcb7c375/Men_s_Wool_Runners_-_Natural_Grey__Light_Grey_Sole__-_imageAngle',
        category: 2,
    },
    {
        id: 7,
        title: 'Product 2',
        slug: 'product-8',
        price: {
            currency: 'CZK',
            value: 600,
        },
        description:
            'Nam turpis, ro enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/7eNfTzIHREFUlXHWYL6AqF/34415ffe25ec446e37c857ff9f6eea92/AA001LM_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_RELAY_BLIZZARD_NATURAL_BLACK.png',
        category: 1,
    },
    {
        id: 8,
        title: 'Product-9',
        slug: 'product',
        price: {
            currency: 'CZK',
            value: 10000,
        },
        description:
            'Nam turpis, tortor posuere eu ultricies. Quisque porttitor urna dictumst, nibh mattis dictum, libero enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/z0Z7JaTiFmKncrgGOxJp7/24a0b02e2071298fe8da4628fcb7c375/Men_s_Wool_Runners_-_Natural_Grey__Light_Grey_Sole__-_imageAngle',
        category: 1,
    },
    {
        id: 9,
        title: 'Product 2',
        slug: 'product-10',
        price: {
            currency: 'CZK',
            value: 600,
        },
        description:
            'Nam turpis, ro enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/z0Z7JaTiFmKncrgGOxJp7/24a0b02e2071298fe8da4628fcb7c375/Men_s_Wool_Runners_-_Natural_Grey__Light_Grey_Sole__-_imageAngle',
        category: 1,
    },
    {
        id: 10,
        title: 'Product',
        slug: 'product-11',
        price: {
            currency: 'CZK',
            value: 10000,
        },
        description:
            'Nam turpis, tortor posuere eu ultricies. Quisque porttitor urna dictumst, nibh mattis dictum, libero enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/7eNfTzIHREFUlXHWYL6AqF/34415ffe25ec446e37c857ff9f6eea92/AA001LM_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_RELAY_BLIZZARD_NATURAL_BLACK.png',
        category: 1,
    },
    {
        id: 11,
        title: 'Product 2',
        slug: 'product-12',
        price: {
            currency: 'CZK',
            value: 600,
        },
        description:
            'Nam turpis, ro enim ad conubia torquent malesuada sem. Suscipit dolor, at scelerisque turpis. Metus pretium, platea urna ornare risus. Mollis cras nostra, libero felis, dui ultrices auctor fringilla sodales dolor. Erat diam taciti, lobortis commodo, per potenti a malesuada justo luctus elementum. Sollicitudin pretium torquent, placerat nisl, platea hac a eros purus neque taciti. Ut nullam bibendum id, nec justo ullamcorper, potenti sagittis imperdiet interdum tellus dolor a.',
        image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/z0Z7JaTiFmKncrgGOxJp7/24a0b02e2071298fe8da4628fcb7c375/Men_s_Wool_Runners_-_Natural_Grey__Light_Grey_Sole__-_imageAngle',
        category: 1,
    },
];

export const CATEGORIES: CategoryType[] = [
    {
        id: 1,
        slug: 'auto-moto',
        title: {
            cs: 'Delší nejdelš1i název Auto moto',
            en: 'Automotive',
        },
    },
    {
        id: 2,
        slug: 'elektronics',
        title: {
            cs: 'Elektronika',
            en: 'Electronics',
        },
    },
    {
        id: 3,
        slug: 'clothing',
        title: {
            cs: 'Oblečení',
            en: 'Clothing',
        },
    },
    {
        id: 4,
        slug: 'clothing',
        title: {
            cs: 'Oblečení',
            en: 'Clothing',
        },
    },
    {
        id: 5,
        slug: 'auto-moto',
        title: {
            cs: 'Auto-moto',
            en: 'Automotive',
        },
    },
    {
        id: 6,
        slug: 'elektronics',
        title: {
            cs: 'Elektronika',
            en: 'Electronics',
        },
    },
    {
        id: 7,
        slug: 'clothing',
        title: {
            cs: 'Oblečení',
            en: 'Clothing',
        },
    },
    {
        id: 8,
        slug: 'clothing',
        title: {
            cs: 'Oblečení',
            en: 'Clothing',
        },
    },
];
