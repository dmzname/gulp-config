import gulp from "gulp";
import path from "../config/path.js";

export default () => {
    return gulp.src([path.copyFiles.src, '!./src/assets/images/**'])
        .pipe(gulp.dest(path.copyFiles.dest))
}