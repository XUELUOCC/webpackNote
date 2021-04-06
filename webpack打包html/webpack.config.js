const pathlib=require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:pathlib.resolve('./src/1.js'),
    output:{
        filename:'bundle.js',
        path:pathlib.resolve('build/')
    },
    module:{
        rules:[
            {

            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/1.html'
        })
    ],
    mode:'development'
}