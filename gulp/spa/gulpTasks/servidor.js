const gulp = require('gulp')
const watch = require('gulp-watch')
const webServer = require('gulp-webserver')


gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/img/**/*.*', () => gulp.start('app.imgs'))
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build').pipe(webServer({
        livereload: true,
        port: 8080, 
        open: true
    }))
})