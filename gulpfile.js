
// ------------------------------------
// Libraries
// ------------------------------------

var fs        = require('fs');
var gulp      = require('gulp');
var less      = require('gulp-less');
var jade      = require('gulp-jade');
var imagemin  = require('gulp-imagemin');
var rename    = require('gulp-rename');

// ------------------------------------
// Paths
// ------------------------------------

var paths     = {
  styles      : './src/assets/styles/**/*.less',
  scripts     : './src/assets/scripts/**/*.js',
  images      : './src/assets/images/**/*.{png,gif,jpeg,jpg,svg}',
  templates   : './src/**/*.jade'
};

// ------------------------------------
// Default Task
// ------------------------------------

gulp.task('default', ['images', 'scripts', 'styles', 'templates']);

// ------------------------------------
// Watch Task
// ------------------------------------

gulp.task('watch', function() {

  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.templates, ['templates']);

});

// ------------------------------------
// Styles Task
// ------------------------------------

gulp.task('styles', function() {

  gulp.src('./src/assets/styles/style.less')
    .pipe(less())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./public/assets/styles/'))

});

// ------------------------------------
// Scripts Task
// ------------------------------------

gulp.task('scripts', function() {

  gulp.src(paths.scripts)
    .pipe(gulp.dest('./public/assets/scripts/'))

});

// ------------------------------------
// Images Task
// ------------------------------------

gulp.task('images', function() {

  gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('./public/assets/images/'))

});

// ------------------------------------
// Templates Task
// ------------------------------------

gulp.task('templates', function() {

  gulp.src(paths.templates)
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('./public/'))

});


