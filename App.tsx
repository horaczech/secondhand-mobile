import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import './src/i18n/i18n';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <Navigation />
                </SafeAreaProvider>
            </Provider>
        </>
    );
};

export default App;
