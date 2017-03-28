var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
/*var rename = require('gulp-rename');*/
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(cb){
	// tarea script
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./src/js'));
});

gulp.task('style', function() {
	// tarea style
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./src/css'));
});

gulp.task('images', function() {
	return gulp.src('./docs/*.jpg')
    .pipe(gulp.dest('./src/img/img-docs'));
});


gulp.task('default', ['images', 'style', 'script']);