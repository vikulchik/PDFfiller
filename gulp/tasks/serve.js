const config = require('../config.json');
const browserSync = require('browser-sync').create();

exports.runServer = () => {
   browserSync.init({
       server: {
           baseDir: './public/templates',
           index: 'main.html'
       }
  });
};

exports.browserSync = browserSync;