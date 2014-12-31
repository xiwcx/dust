var gulp = require('gulp'),
    server = require('gulp-express');

gulp.task('server', function () {
  // Start the server at the beginning of the task
  server.run({
    file: 'app.js'
  });

  // Restart the server when file changes
  gulp.watch(['app.js', 'routes/**/*.js', 'views/**/*.jade'], [server.run]);
});
