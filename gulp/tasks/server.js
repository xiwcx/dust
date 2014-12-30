var gulp = require('gulp'),
    server = require('gulp-express');

gulp.task('server', function () {
  // Start the server at the beginning of the task
  server.run({
    file: 'index.js'
  });

  // Restart the server when file changes
  gulp.watch(['index.js', 'routes/**/*.js'], [server.run]);
});
