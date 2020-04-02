const {override, fixBabelImports, addDecoratorsLegacy, addLessLoader} = require('customize-cra')

const theme = require('./theme')

module.exports = override(
    fixBabelImports('import', {
       libraryName: 'antd',
       libraryDirectory: 'es',
       style: true,
     }),
    addDecoratorsLegacy(),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme
    })
)