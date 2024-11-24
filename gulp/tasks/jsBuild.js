import gulp from "gulp";

import path from "../config/path.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";

import webpack from 'webpack-stream';
import webpackConfig from "../../webpack.config.js";

export default () => {
    return gulp.src(path.js.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message,
        }))
    }))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(path.js.dest))
};
