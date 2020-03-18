const CompressionPlugin = require("compression-webpack-plugin"); // gzip压缩,优化http请求,提高加载速度
const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir);
};


module.exports = {
  outputDir: './dist',
  assetsDir:'static',
  filenameHashing:true, // false 来关闭文件名哈希
  lintOnSave: false, // 关闭eslint
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8888
  },
   // webpack相关配置
  chainWebpack: (config) => {
    config.entry.app = ['./src/main.js']
    config.resolve.alias
      .set('@', resolve('src'))
    // 压缩代码
    config.optimization.minimize(true) 
    .end()
  },
  configureWebpack:config => {
    // 开启gzip压缩
    config.plugins.push(new CompressionPlugin({
      algorithm: 'gzip',
      test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"), // 匹配文件扩展名
      threshold: 5120, // 对超过5k的数据进行压缩
      minRatio: 0.8,
      cache: true, // 是否需要缓存
      deleteOriginalAssets:false  // true删除源文件(不建议);false不删除源文件
    }))
  },
   // 第三方插件配置
  pluginOptions: {

  }
}

