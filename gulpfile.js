var gulp = require('gulp'),
    typescript = require('gulp-tsc'),
    concat = require('gulp-concat');
    babel = require('gulp-babel');
 
gulp.task('compile', function(){
  gulp.src(['src/model/**/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('src/build/js/'))
});
/* 
gulp.task('scripts', function() {
  return gulp.src('./src/build/js/lib/*.js')
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./src/build/js/'));
});
*/