const gulp = require('gulp');
const pug = require('gulp-pug');
const config = require('../config.json');

module.exports = () => {
  return gulp.src(config.pugUrl)
    .pipe(pug({}))
    .pipe(gulp.dest(config.publicUrls.html));
};