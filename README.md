webpack 打包速度优化

    cacheDirectory：默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。
    之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，
    可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)。
    如果设置了一个空值 (loader: 'babel-loader?cacheDirectory') 
    或者 true (loader: babel-loader?cacheDirectory=true)，l
    oader 将使用默认的缓存目录 node_modules/.cache/babel-loader，
    如果在任何根目录下都没有找到 node_modules 目录，将会降级回退到操作系统默认的临时文件目录。
    
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {cacheDirectory: true},
        }],
      },
    }
    
    babel-loader 很慢！
    确保转译尽可能少的文件。你可能使用 /\.js$/ 来匹配，这样也许会去转译 node_modules 
    目录或者其他不需要的源代码。
    
    要排除 node_modules，参考文档中的 loaders 配置的 exclude 选项。
    
    你也可以通过使用 cacheDirectory 选项，将 babel-loader 提速至少两倍。 
    这会将转译的结果缓存到文件系统中。