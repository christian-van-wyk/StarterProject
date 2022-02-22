const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


//compile scss into css
function style() {
    //1. find my css file
    return gulp.src('./resources/scss/styles.scss')
    //2. Pass that file through the sass compiler
        .pipe(sass())
    //3. Where do you want to save the compiled css
        .pipe(gulp.dest('./resources/css/'))
    //4. stream changes to all broser
        .pipe(browserSync.stream());
}

function watch () {
    style()
    gulp.watch('./resources/scss/styles.scss', style);
}



exports.default = watch;
