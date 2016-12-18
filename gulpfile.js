const gulp = require('gulp');
const scss = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('scss', () => {
  return gulp.src('./scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css'))
})

//watch makes it look at this directory and any directories within this directory. If there are any changes, the watch task triggers and runs the task called 'scss', which updates the app.css file
gulp.task('watch', ['browserSync'], ()=> {
  gulp.watch('./scss/**/*.scss', ['scss'])
})

gulp.task('browserSync', () => {
  return browserSync.init(['./scss', './public'], {   //if anything changes in the browser, then run the scss file.
    server: {
      baseDir: './public'
    }
  })
})

gulp.task('default', ['watch', 'scss']) 