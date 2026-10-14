const gulp = require('gulp'),
      rename = require('gulp-rename'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      gulpSass = require('gulp-sass'),
      dartSass = require('sass'),
      terser = require('gulp-terser');

const sass = gulpSass(dartSass);

gulp.task('sass', function(){
    return gulp
        .src('./scss/stylesheet.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ]))
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