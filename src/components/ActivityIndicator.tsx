import React from 'react';
import {ActivityIndicator as DefaultActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreProps} from '../ts/interfaces';

const ActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
    const {activeTheme} = useSelector((state: StoreProps) => state.theme);

    return <DefaultActivityIndicator size="small" color={activeTheme.colors.primary} {...props} />;
};

export default ActivityIndicator;
