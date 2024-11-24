import gulp from "gulp";

import path from "../config/path.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";

export default () => {
    return gulp.src(path.img.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "IMG",
            message: error.message,
        }))
    }))
    .pipe(gulp.dest(path.img.dest))
};