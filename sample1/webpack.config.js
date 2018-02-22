module.exports = {
	//生成source maps(使调试更容易)
	//一般有四种配置：source-map,cheap-module-source-map,eval-source-map,cheap-module-eval-source-map
	devtool:"eval-source-map",

	// 使用devserver 构建本地服务器，监听代码修改
	// npm install --save-dev webpack-dev-server
	// devserver 的配置选项：
	// contentBase:默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
	// port:设置默认监听端口，如果省略，默认为”8080“
	// inline:设置为true，当源文件改变时会自动刷新页面
	// historyApiFallback:在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	devServer:{
		contentBase:"./public",
		historyApiFallback:true,
		inline:true
	},
	entry:__dirname + "/app/index.js",
	output:{
		path:__dirname + "/public",
		filename:"bundle.js"
	}
}