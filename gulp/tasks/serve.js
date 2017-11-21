const config = require('../config.json');
const browserSync = require('browser-sync').create();

exports.runServer = () => {
   browserSync.init({
    server: './public',
  });
};

exports.browserSync = browserSync;