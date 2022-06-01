import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import './src/i18n/i18n';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <StatusBar barStyle="light-content" translucent />
                    <Navigation />
                </SafeAreaProvider>
            </Provider>
        </>
    );
};

export default App;
