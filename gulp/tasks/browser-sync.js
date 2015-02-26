'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        open: 'external',
        proxy: 'dst.dev:3003',
        xip: true
    });
});
