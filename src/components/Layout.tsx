import React from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

const Layout = ({children, edges}: SafeAreaViewProps) => {
    return <SafeAreaView edges={edges || ['bottom', 'top']}>{children}</SafeAreaView>;
};

export default Layout;
