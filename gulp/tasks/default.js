'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('default', ['browserify', 'browser-sync'], function () {
  gulp.watch('app/**/*.{js,hbs}', ['browserify', browserSync.reload]);
});
