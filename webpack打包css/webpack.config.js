const pathlib =require('path');

module.exports={
    entry:'./src/1.js',
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
                     'css-loader'
                 ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    //less-loader将文件编译成css文件，再通过css-loader,style-loader依次进行编译(需要下载less,less-loader)
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[

    ],
    mode:'development'
}