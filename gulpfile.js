const gulp = require('gulp'),
      rename = require('gulp-rename'),
      cssnano = require('gulp-cssnano'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      terser = require('gulp-terser');

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
        .pipe(gulp.dest('./public/css',))
})

gulp.task('scripts', function(){
  return gulp.src('./js/script.js')
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function() {
	gulp.watch('js/*.js', gulp.series('scripts'));
    gulp.watch('./scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'watch'));