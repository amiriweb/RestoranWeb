var gulp = require('gulp');
var watch = require('gulp-watch');
var debug = require('gulp-debug');
var browserSync = require('browser-sync').create();


gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch('./index.html', function() {
    browserSync.reload();
  });

  watch('./sass/**/*.scss', function() {
    gulp.start('cssInject');
  });

  watch('./scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});

gulp.task('cssInject',['sass'], function() {
  return gulp.src('./css/main.css')
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function() {
  browserSync.reload();
});
