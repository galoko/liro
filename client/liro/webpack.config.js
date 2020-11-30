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
    externals: {
        "liro-core": "LiroCore",
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

const externalConfig = Object.assign({}, config, {
    name: "external",
    output: {
        filename: "libs/liro.js",
        path: __dirname,
    },
})

module.exports = [externalConfig]
