const path = require('path'); 
 
module.exports = {
    devtool: 'source-map',
    entry: './js/src/main.js',
    output: {
        path: path.resolve(__dirname, './js/build'),
        filename: 'bundle.js'
    },
    // IMPORTANT NOTE: If you are using Webpack 2, replace "loaders" with "rules"
    module: {
        rules: [
            {
                //use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ["babel-preset-env"]
                    }
                  }
                //query: {
                 //   presets: ['env']
               // }
            }
        ]
    }
}