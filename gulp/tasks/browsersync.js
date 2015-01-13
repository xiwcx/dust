var browserSync = require('browser-sync');
var gulp        = require('gulp');

// Static server
gulp.task('browser-sync', function() {
  browserSync({
    host: "dst.dev",
    open: "external",
    server: {
      baseDir: [
        "public"
      ]
    },
  });
});
