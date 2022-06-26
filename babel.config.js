module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['.'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@assets': './assets',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                moduleName: 'react-native-dotenv',
                path: '.env',
                blocklist: null,
                allowlist: null,
                safe: false,
                allowUndefined: true,
            },
        ],
    ],
};
