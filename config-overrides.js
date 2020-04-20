/**
 * 自定义扩展配置webpack
 */
const {override, addLessLoader, fixBabelImports, addWebpackAlias, addBundleVisualizer, addBabelPresets} = require('customize-cra');
const path = require("path");

const addCustomise = () => config => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
  }
  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
  loaders[loaders.length - 2].test = /\.less$/;
  // loaders[loaders.length - 2].exclude =[/node_modules/];
  loaders[loaders.length - 2].use[1] = {
    ...loaders[loaders.length - 2].use[1],
    options: {
      importLoaders: 2,
      modules: {
        localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
      },
    }
  };
  return config;
};

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: '[local]--[hash:base64:5]',
    modifyVars: {
      "@primary-color": "#F53F3F",
    }
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, 'src')
  }),
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  ...addBabelPresets([
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: 3
    }
  ]),
  addCustomise()
);
