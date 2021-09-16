const { paths } = require('react-app-rewired');
const configPath = require(paths.scriptVersion + '/config/webpack.config')
const { override, addWebpackAlias, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

const multipleEntry = require('react-app-rewire-multiple-entry')([
  // 模块1
  {
    entry: 'src/page/Order/index.tsx',
    template: 'public/order.html',
    outPath: '/order.html'
  },
  // 模块2
  {
    entry: 'src/page/Singup/index.tsx',
    template: 'public/singup.html',
    outPath: '/singup.html'
  }
  // 模块3.....
]);


// 自定义的一个 解析webpack函数
// 打包配置
// const addCustomize = () => config => {
//   if (process.env.NODE_ENV === 'production') {
//     // 关闭sourceMap
//     config.devtool = false;
//     // 配置打包后的文件位置
//     config.output.path = __dirname + '../dist/demo/';
//     config.output.publicPath = './demo';
//     // 添加js打包gzip配置
//     config.plugins.push(
//       new CompressionWebpackPlugin({
//         test: /\.js$|\.css$/,
//         threshold: 1024,
//       }),
//     )
//   }
//   return config;
// }

module.exports = override(
  fixBabelImports( 'import' ,{ libraryName:"antd-mobile",  style: 'css' } ), // 载入 antd-mobile
  addWebpackAlias({  // 载如路径别名
    ['@']: resolve('src')
  }),
  addLessLoader(),  // 载入less
  addPostcssPlugins(  // 配置px转rem
    [require('postcss-pxtorem')({ 
        rootValue:37.5,  // 750的设计稿
        propList: ['*'],
        minPixelValue: 1, 
        selectorBlackList: ['am-'] 
  })]),
  (config, env)  => {// 配置多入口
    multipleEntry.addMultiEntry(config);
    config = {...config, ...configPath}
    config.resolve.alias = {
        "@": path.resolve(__dirname, "src")
    };
    return config;  // 这个config 实际上就是聚合在一起的webpack config
  }
) 
