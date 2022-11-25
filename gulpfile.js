let gulp = require('gulp');
let pug = require('gulp-pug');
let sass = require('gulp-sass')(require('sass'));
let autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', function () {
    return gulp.src('src/pug/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
})

gulp.task('sass', function () {
    return gulp.src('src/static/scss/main.scss')
        .pipe(sass({}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions']
        }))
        .pipe(gulp.dest('build/css/'))
})

gulp.task('watch', function () {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/scss/**/*.scss', gulp.series('sass'));
})

gulp.task('default', gulp.series(gulp.parallel('pug', 'sass'), 'watch'))
