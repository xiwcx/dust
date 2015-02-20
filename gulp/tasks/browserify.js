var browserify = require('browserify'),
    gulp = require('gulp'),
    hbsfy = require('hbsfy'),
    rename = require("gulp-rename"),
    source = require('vinyl-source-stream');

// using vinyl-source-stream:
gulp.task('browserify', function() {
  browserify('./app/scripts/main.js', {debug: !gulp.env.production})
    .transform(hbsfy)
    .bundle()
    .pipe(source('main.js'))
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('public'));
});
