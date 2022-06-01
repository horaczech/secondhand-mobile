import {Share} from 'react-native';
import {APP_URL} from 'react-native-dotenv';

export const isValidUri = (uri: string) => {
    return uri.includes('http://') || uri.includes('https://');
};

export const share = async ({message, url, title}: {message: string; url?: string; title?: string}) => {
    const shareObj: {message: string; url?: string; title?: string} = {
        message,
    };

    if (url) {
        shareObj.url = url;
    }
    if (title) {
        shareObj.title = title;
    }
    const res = await Share.share(shareObj);
    return res;
};

export const productUrl = ({id, slug}: {id: number; slug: string}) => {
    return `${APP_URL}/${id}-${slug}`;
};
