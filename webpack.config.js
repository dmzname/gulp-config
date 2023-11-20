import appConfig from './gulp/config/app.js';
const {isProd} = appConfig;

const config = {
    mode: isProd ? 'production' : 'development',
    entry: './src/js/index.js',
    output: {
        filename: '[name].min.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }
        ]
    }
}

export default config;