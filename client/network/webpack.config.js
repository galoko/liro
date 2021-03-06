const config = {
    devServer: {
        contentBase: __dirname + "/",
        inline: true,
        host: "0.0.0.0",
        port: 3332,
        disableHostCheck: true,
        compress: true,
    },
    entry: {
        index: "./src/index.ts",
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
}

const distConfig = Object.assign({}, config, {
    name: "dist",
    output: {
        filename: "./dist/[name].js",
        path: __dirname,
        library: "LiroNetwork",
        libraryTarget: "umd",
    },
})

module.exports = [distConfig]
