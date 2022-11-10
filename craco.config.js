const CracoLessPlugin = require('craco-less');
// const path = require('path');

const lessModifyVars = {};

module.exports = {
  plugins: [
    {
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: lessModifyVars,
                    javascriptEnabled: true,
                },
            },
            modifyLessRule: function (lessRule, _context) {
                lessRule.test = /\.less$/;
                lessRule.exclude = /\.module\.less$/;
                return lessRule;
            },
        },
    }
],
};