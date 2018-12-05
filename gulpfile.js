var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS =require('gulp-clean-css');
var rename = require('gulp-rename');
gulp.task('sass', function(){
    return gulp.src('src/assets/scss/style.scss')
            .pipe(sass())
            .pipe(minifyCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('src/assets/css'))
            .pipe('src/assets/css');

})

gulp.watch('files-to-watch', ['tasks', 'to', 'run']);

gulp.task('watch', function(){
  gulp.watch('src/assets/scss/**/*.scss', ['sass']); 
})
gulp.task('default', ['watch']);