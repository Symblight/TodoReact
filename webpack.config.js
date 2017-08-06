const webpack = require('webpack');
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE || 'development';
const isProduction = nodeEnv === 'production';

const PATHS = {
	source: path.join(__dirname, 'app'),
	build : path.join(__dirname, 'dist')
};

const plugins = [
	new webpack.DefinePlugin({
		'process.env':{
			NODE_ENV: JSON.stringify(nodeEnv)
		},
	}),
	new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin()
	//new HtmlWebpackPlugin()
];

const rules = [
	{
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use:[
			'babel-loader'
		]
	},
    {
        test: /\.jpe?g$|\.gif$|\.png$/,
        use:[
            'file-loader?name=/images/[name].[ext]?hash'
        ]
    }
];

if (isProduction) {
    rules.push(
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use : 'css-loader!postcss-loader!sass-loader'
            }),
        }
    )
} else {
    rules.push(
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use:[
            'style-loader',
            'css-loader',
            'postcss-loader?sourceMap',
            'sass-loader?sourceMap',
            ]
            
        }
    );
};

module.exports = {
    devtool: isProduction ? false: 'source-map',
    entry: PATHS.source +'/main.js',
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module:{
        rules,
    },
    resolve:{
        extensions:['.js', '.jsx'],
    },
    plugins,
};