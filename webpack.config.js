const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    console.log(
        `📦 Running webpack in ${
        env.production ? 'production' : 'development'
        } mode`
    )
    return {
        entry: __dirname + '/src/js/main.js',
        output: {
            path: path.resolve(__dirname, 'dist/assets'),
            filename: 'main.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                    require('cssnano'),
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [new MiniCssExtractPlugin()],
    }
}
