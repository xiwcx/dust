var browserify = require('browserify'),
    gulp = require('gulp'),
    rename = require("gulp-rename"),
    source = require('vinyl-source-stream');

// using vinyl-source-stream:
gulp.task('browserify', function() {
  var bundleStream = browserify('./app/scripts/main.js').bundle()

  bundleStream
    .pipe(source('main.js'))
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('public'))
})
