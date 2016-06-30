var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        // loaders: [{
        //     test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        //     //exclude: /node_modules/,
        //     loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
        //     query:{
        //         presets:["es2015", "react"]
        //     }
        // }],

        loaders: [
            {test: /\.jsx?$/, loader: "babel",query:{presets:["es2015", "react"]}},
            //exclude: /node_modules/,
            {test: /\.css?$/, loader: "style!css" },
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss?$/, loader: "style!css!sass"}
        ],
        resolve: {
            extensions: ['','.js','.jsx','.css']      
        }
    }
};

module.exports = config;