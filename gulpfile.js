'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
const terser = require('gulp-terser');
//Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];
//Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('./resourses/css/*.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({overrideBrowserslist: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist/resourses/css/'))
});
//Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./resourses/js/*.js')
    // Minify the file
    .pipe(terser())
    .on('error', function (err) { console.log( err ) })
    // Output
    .pipe(gulp.dest('./dist/resourses/js/'))
});
gulp.task('pages', function() {
	  return gulp.src(['./*.html'])
	    .pipe(htmlmin({
	      collapseWhitespace: true,
	      removeComments: true
	    }))
	    .pipe(gulp.dest('./dist'));
	});

gulp.task('studentpages', function() {
	  return gulp.src(['./students/*.html'])
	    .pipe(htmlmin({
	      collapseWhitespace: true,
	      removeComments: true
	    }))
	    .pipe(gulp.dest('./dist/students'));
	});

gulp.task('copyImages', function () {
    gulp.src('./resourses/img/*')
        .pipe(gulp.dest('./dist/resourses/img/'));
});

//Clean output directory
gulp.task('clean', () => del(['dist']));
// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'styles',
    'scripts',
    'pages',
    'studentpages',
    'copyImages'
  );
});