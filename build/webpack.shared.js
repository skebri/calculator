const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const favicon = new FaviconsWebpackPlugin({
  logo: path.resolve('favicon.png'),
  persistentCache: true,
  inject: 'force',
  favicons: {
    appName: 'App name',
    developerName: 'App',
    theme_color: '#000000',
    icons: {
      android: true,
      appleIcon: true,
      favicons: true,
      appleStartup: false,
      coast: false,
      firefox: false,
      windows: false,
      yandex: false
    }
  }
});

const ignoreMomentLocales = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);

const appManifest = new WebpackPwaManifest({
  name: 'App name',
  short_name: 'App short name',
  description: 'App description',
  background_color: '#000000',
  theme_color: '#000000',
  icons: {
    src: path.resolve('favicon.png'),
    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
  },
});

const resolve = {
  extensions: ['.js', '.jsx'],
  alias: {
    translate: path.resolve(__dirname, '../src/i18n/i18n.js'),
  },
  modules: [path.join(__dirname, '../src'), 'node_modules']
};
const entry = './src/index.jsx';

module.exports = { appManifest, ignoreMomentLocales, favicon, resolve, entry };
