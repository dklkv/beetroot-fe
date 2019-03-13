let gulp = require('gulp'),
    minify = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    bs = require('browser-sync').create();

gulp.task('browsersync', function () {
    bs.init({
        server: "./",
        port: 8080
    });
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', gulp.series('style'));
    gulp.watch('src/js/script.js', gulp.series('script'));
    bs.watch('*.html').on('change', bs.reload);
});

gulp.task('style', function() {
    return gulp.src('src/sass/main.scss', {style : 'expended'})
            .pipe(sass({includePaths: ['src/sass/**']}))
            .pipe(rename({suffix: '.min'}))
            .pipe(minify())
            .pipe(gulp.dest('css/'))
            .pipe(notify({message: 'Style task is finished'}))
            .pipe(bs.reload({stream: true}));
});

gulp.task('script', function() {
    return gulp.src('src/js/script.js')
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('js/'))
            .pipe(notify({message: 'Script task is finished'}))
            .pipe(bs.reload({stream: true}));
});

gulp.task('imagemin', function() {
    return gulp.src('src/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));
});

gulp.task('default', gulp.parallel('browsersync', 'watch'));