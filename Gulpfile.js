var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('v1/assets/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('v1/assets/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('v1/assets/sass/**/*.scss',['sass']);
});
