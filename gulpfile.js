const gulp = require('gulp');

// import tasks
const views = require('./gulp/tasks/views');
const styles = require('./gulp/tasks/styles');
const serve = require('./gulp/tasks/serve').runServer;
const browserSync = require('./gulp/tasks/serve').browserSync;
const runWatchers = require('./gulp/tasks/watchers');

// Compile pug into html
gulp.task('views', views);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', styles);

// Static Server + watching scss/html files
gulp.task('serve', ['views', 'sass'], serve);

runWatchers(browserSync);

gulp.task('default', ['serve']);
