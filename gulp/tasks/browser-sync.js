var browserSync = require('browser-sync'),
    gulp = require('gulp');

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        open: "external",
        proxy: "dst.dev:3003",
        xip: true
    });
});
