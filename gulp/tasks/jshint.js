var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task('jshint', function() {
  return gulp.src(['./index.js', './{app,gulp,routes}/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }))
    .pipe(jshint.reporter('fail'));
});
