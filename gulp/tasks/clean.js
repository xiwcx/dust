var gulp = require('gulp'),
    rimraf = require('rimraf');

gulp.task('clean', function (cb) {
  rimraf('./public', cb);
});
