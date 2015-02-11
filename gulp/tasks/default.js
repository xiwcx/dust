var gulp = require('gulp'),
    browserSync = require("browser-sync");

gulp.task('default', ['browserify', 'browser-sync'], function () {
  gulp.watch('app/**/*.{js,hbs}', ['browserify', browserSync.reload]);
});
