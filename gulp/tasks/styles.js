const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const config = require('../config.json');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");

module.exports = () => {
  return gulp.src(config.scssUrl)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest(config.publicUrls.styles));
};