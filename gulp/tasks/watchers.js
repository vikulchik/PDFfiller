const gulp = require('gulp');
const config = require('../config.json');

module.exports = (browserSync) => {
  gulp.watch(config.watcherUrls.pug, ['views']);
  gulp.watch(config.watcherUrls.scss, ['sass']).on('change', browserSync.reload);;
  gulp.watch(`./${config.publicUrls.html}/index.html`).on('change', browserSync.reload);
};
