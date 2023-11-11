import gulp from "gulp";

import path from "../config/path.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";

import pug from "gulp-pug";
import htmlFormat from "gulp-format-html";

export default () => {
    return gulp.src(path.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "PUG",
            message: error.message,
        }))
    }))
    .pipe(pug())
    .pipe(htmlFormat())
    .pipe(gulp.dest(path.pug.dest))
}
