const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const progressBar = require('next-progressbar');
const getRoutes = require('./lib/routers');

module.exports = withPlugins([
    [sass, {
        cssModules: true,
        exportPathMap: getRoutes,
        cssLoaderOptions: {
            localIdentName: '[path]___[local]___[hash:base64:5]',
        }
    }],
    progressBar
]);
