const {
  override,
  addWebpackAlias, 
  fixBabelImports,
  addLessLoader
} = require("customize-cra");
const path = require("path");
// const darkThemeVars = require('antd/dist/dark-theme');

 
module.exports = override(
  addWebpackAlias({
    "@": path.resolve('src')
  }),
 
  fixBabelImports('import',{
		libraryName:'antd',
		libraryDirectory:'es',
		style: true
	}),

	addLessLoader({
    javascriptEnabled: true,
		modifyVars:{
      // 'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
      // ...darkThemeVars,
      '@primary-color':'#f00',
    },
		localIdentName: '[local]--[hash:base64:5]'
  })
);