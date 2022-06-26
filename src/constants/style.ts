import {DefaultOffsetsType} from '../ts/types';

export const DEFAULT_OFFSETS: DefaultOffsetsType = {
    small: 5,
    medium: 10,
    large: 15,
    xl: 20,
};

export const BREAKPOINTS = {
    basic: 375,
};

export const FONT_SIZES = {
    h1: 30,
    h2: 20,
    h3: 18,
    h4: 16,
    text: 12,
};

const lineHeightMultiplier = 1.2;

export const LINE_HEIGHTS = {
    h1: FONT_SIZES.h1 * lineHeightMultiplier,
    h2: FONT_SIZES.h2 * lineHeightMultiplier,
    h3: FONT_SIZES.h3 * lineHeightMultiplier,
    h4: FONT_SIZES.h4 * lineHeightMultiplier,
    text: FONT_SIZES.text * lineHeightMultiplier,
};

export const RADIUSES = {
    small: 5,
    medium: 10,
    large: 15,
    xl: 20,
};

export const OPACITIES = {
    pressable: 0.8,
};

export const ICON_SIZES = {
    medium: 28,
};
