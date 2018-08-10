module.exports = {
	entry: {
		"public_style": __dirname + "/src/public_style_db.js", //⼊⼝⽂件
		"index_style": __dirname + "/src/index_style_db.js"
	},
	output: {
		path: __dirname + "/dist", //打包后的⽂件存放的地⽅
		filename: "[name].js" //打包后输出⽂件的⽂件名	//默认自动生成bundle-build这两JS文件
	},
	module: {
		rules: [{
				test: /\.js/,
				use: {
					loader: "babel-loader",
					options: { presets: ["env"] }
				},
				exclude: /node_modules/ //排除node_modules文件中的文件
			},
			{
				test: /\.(scss|css)/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}]
	},
	devServer: {
		contentBase: "./dist", //本地服务器所加载的⻚⾯所在的⽬录
		historyApiFallback: true, //不跳转
		inline: true, //实时刷新
		port: 81 //设置端⼝
	}
}