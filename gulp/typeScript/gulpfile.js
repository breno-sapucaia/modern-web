import { task, dest } from 'gulp';
import { createProject as tsCreateProject } from 'gulp-typescript';
import babel from 'gulp-babel';
import concat from 'gulp-concat';



const tsProject = tsCreateProject('tsconfig.json')


task('default', () =>{
    return tsProject.src()
        .pipe(tsProject())
        .pipe(concat('app.min.js'))
        .pipe(babel({
            minified: true,
            comments: false,
            presets: ["env"]
        }))
        .pipe(dest('build'))
})