import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import EN from '../locales/en.json';
import CZ from '../locales/cz.json';

const resources = {
    en: {
        translation: EN,
    },
    cs: {
        translation: CZ,
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'cs',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
