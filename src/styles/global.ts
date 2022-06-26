import {StyleSheet} from 'react-native';
import {FONT_SIZES, LINE_HEIGHTS} from '../constants/style';

export const globalStyles = StyleSheet.create({
    h1: {
        fontSize: FONT_SIZES.h1,
        lineHeight: LINE_HEIGHTS.h1,
        fontWeight: '600',
    },
    h2: {
        fontSize: FONT_SIZES.h2,
        lineHeight: LINE_HEIGHTS.h2,
        fontWeight: '600',
    },
    h3: {
        fontSize: FONT_SIZES.h3,
        lineHeight: LINE_HEIGHTS.h3,
    },
    h4: {
        fontSize: FONT_SIZES.h4,
        lineHeight: LINE_HEIGHTS.h4,
    },
    text: {
        fontSize: FONT_SIZES.text,
    },
    row: {
        flexDirection: 'row',
    },
    alignCenter: {
        alignItems: 'center',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    end: {
        justifyContent: 'flex-end',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    400: {
        fontWeight: '400',
    },
    500: {
        fontWeight: '500',
    },
    600: {
        fontWeight: '600',
    },
    fullAbsolute: {position: 'absolute', width: '100%', height: '100%'},
});
