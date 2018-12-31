const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.ts',
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    delete config.entry.app
    config.resolve.alias
            .set('@', resolve('example'))
    config.module
      .rule('ts')
      .include
        .add(resolve('packages'))
        .end()
  }
}