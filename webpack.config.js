const path = require('path');

module.exports = {
    entry: "./app/main",
    devtool:'inline-source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["env" , "react"],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    },
    watch : true
}