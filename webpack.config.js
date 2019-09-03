const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); // eslint-disable-line @typescript-eslint/no-var-requires
const CompressionPlugin = require('compression-webpack-plugin'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
        lambda1: './src/lambdas/lambda-1/index.ts',
        lambda2: './src/lambdas/lambda-2/index.ts',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-bundle.js',
    },
    resolve: {
        extensions: ['.ts'],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
            },
        ],
    },
    plugins: [
        new CompressionPlugin({
            deleteOriginalAssets: true,
            filename: '[path].zip[query]',
        }),
    ],
};
