const pathlib=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:pathlib.resolve('./src/1.js'),
    output:{
        path:pathlib.resolve('build/'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/.(png|jpeg|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    esModule:false
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
                options:{
                    esModule:false
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/1.html'
        })
    ],
    mode:'development'
}