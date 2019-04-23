const gulp = require('gulp');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const err = erro => {
    console.log({erro})
}

gulp.task('default', () =>{
    return gulp.src('src/**/*.js')
        .pipe(babel({
            minified: true,
            comments: false,
            presets: ["env"]
        }))
        // .pipe(uglify())
        .on('error', err)
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})