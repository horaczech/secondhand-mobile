import {ActiveThemeType, MarginHelpersValueType, MarginSidesType, TextClassNameType} from '../ts/types';
import {DEFAULT_OFFSETS} from '../constants/style';
import {globalStyles} from '../styles/global';

export const handleSide = (side?: MarginSidesType) => {
    switch (side) {
        case 't':
            return 'marginTop';
        case 'r':
            return 'marginRight';
        case 'b':
            return 'marginBottom';
        case 'l':
            return 'marginLeft';
        case 'v':
            return 'marginVertical';
        case 'h':
            return 'marginHorizontal';
        default:
            return 'margin';
    }
};

export const m = (value: MarginHelpersValueType, side?: MarginSidesType) => {
    let styleKey = handleSide(side);
    if (typeof value !== 'number' && Object.keys(DEFAULT_OFFSETS).indexOf(value) !== -1) {
        const nth = Object.keys(DEFAULT_OFFSETS).indexOf(value);
        return {
            [styleKey]: Object.values(DEFAULT_OFFSETS)[nth],
        };
    }
    return {[styleKey]: value};
};

export const styleFromClassName = (type?: TextClassNameType) => {
    if (!type) {
        return null;
    }
    return globalStyles[type];
};

export const focusedColor = (focused: boolean, activeTheme: ActiveThemeType) => {
    if (focused) {
        return activeTheme.colors.primary;
    }
    return activeTheme.colors.bottomIcon;
};
