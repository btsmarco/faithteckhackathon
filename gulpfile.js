'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

//A Task to Compile Sass. 

gulp.task('styles', () => {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./public/styles/'))
});

//A Task to Compile Javascript

gulp.task('scripts', () => {
	return gulp.src('./dev/scripts/main.js')
	//return gulp.src('.dev/scripts/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/scripts'))
});

//A Task to Watch For Changes to Files
//A Task to Watch All Other Tasks

gulp.task('watch', () => {
	gulp.watch('./dev/styles/**/*.scss', ['styles']);
	gulp.watch('./dev/scripts/main.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);

