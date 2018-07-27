const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const progressBar = require('next-progressbar');

const {ANALYZE, ASSET_HOST} = process.env;

const assetPrefix = ASSET_HOST || '0.0.0.0:3000';

const nextConfig = {
    distDir: 'build',
    webpack: (config, {dev}) => {
        config.output.publicPath = `${assetPrefix}${config.output.publicPath}`;

        // https://github.com/zeit/next.js/issues/3184
        config.plugins = config.plugins.filter(p =>
            p.constructor.name !== 'UglifyJsPlugin'
        );

        if (!dev) {
            const Uglify = require('uglifyjs-webpack-plugin');
            config.plugins.push(
                new Uglify({
                    parallel: true,
                    cache: true,
                    sourceMap: true
                })
            )
        }

        if (ANALYZE) {
            const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 8888,
                openAnalyzer: true
            }))
        }

        return config
    }
};

module.exports = withPlugins([
    [sass, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[path]___[local]___[hash:base64:5]',
        }
    }],
    progressBar
], nextConfig);
