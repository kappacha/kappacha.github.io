const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass(
      { outputStyle: 'expanded' }
    ).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});