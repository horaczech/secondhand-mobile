import React from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

interface Props extends SafeAreaViewProps {
    withHeader?: boolean;
}

const Layout: React.FC<Props> = ({children, edges}) => {
    return (
        <>
            <SafeAreaView edges={edges || ['top']}>{children}</SafeAreaView>
        </>
    );
};

export default Layout;
