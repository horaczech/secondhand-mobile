import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKeysType} from '../ts/types';

export const getFromAsyncStorage = async (key: AsyncStorageKeysType) => {
    return await AsyncStorage.getItem(key);
    // returns null | 'light' | 'dark'
};

export const saveToAsyncStorage = async (key: AsyncStorageKeysType, value: string) => {
    return await AsyncStorage.setItem(key, value);
};

export const shortenText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }
    return `${text.split('').slice(0, maxLength).join('')}...`;
};
