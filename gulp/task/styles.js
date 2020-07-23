var gulp = require('gulp');
var sass  = require('gulp-sass');
    sass.compiler = require('node-sass');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass', function() {
  return gulp.src('./sass/main.scss')
         .pipe(autoprefixer('last 10 versions'))
         .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
         .pipe(gulp.dest('./css'));
});
