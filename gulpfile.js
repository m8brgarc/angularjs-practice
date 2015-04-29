var gulp = require('gulp'),
    pkg = require('./package.json'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    less = require('gulp-less'),
    modernizr = require('gulp-modernizr'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream');


gulp.task('less', function() {
    return gulp.src('./src/less/main.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('browserify', function() {
    return browserify('./src/js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./js/'))
});

gulp.task('watch', function() {
    gulp.watch(['./src/js/**/*.js', '!./src/js/bundle.js'], ['browserify']);
    gulp.watch('./src/less/**/*.less', ['less']);
});