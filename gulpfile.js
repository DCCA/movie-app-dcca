const gulp = require('gulp'),
      rename = require('gulp-rename'),
      cssnano = require('gulp-cssnano'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp
        .src('./scss/stylesheet.scss')
        .pipe(sass())
        // Plugins
        .pipe(
            autoprefixer({
              browsers: ['last 2 versions']
            })
        )
        .pipe(cssnano())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./build/css',))
})

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass'));