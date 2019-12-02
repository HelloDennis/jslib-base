// rollup.config.test.js
// commonjs
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const common = require('./rollup.js');

module.exports = {
  input: 'test/test.ts',
  output: {
    file: 'dist/test.js',
    format: 'cjs',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    // banner: common.banner,
  },
  plugins: [
    common.getCompiler({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          module: 'ES2015'
        }
      },
      useTsconfigDeclarationDir: true
    }),
    serve({
      contentBase: './', //启动文件夹;
      host: 'localhost', //设置服务器;
      port: 9999 //端口号;
    }),
    livereload({
      watch: './' //监听文件夹;
    })
  ]
};