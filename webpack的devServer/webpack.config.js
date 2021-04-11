const pathlib=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:pathlib.resolve('./src/1.js'),
    output:{
        filename:'bundle.js',
        path:pathlib.resolve('build/') 
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                exclude:/\.(css|js|html)$/,
                loader:'file-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer:{
        contentBase:pathlib.resolve('build/'),
        compress:true,
        port:3000,
        open:true
    }
}