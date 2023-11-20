import gulp from "gulp";

import path from "../config/path.js";
import app from "../config/app.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulpIf from "gulp-if";


import webpack from 'webpack-stream';
import sourcemaps from "gulp-sourcemaps";
import webpackConfig from "../../webpack.config.js";

export default () => {
    return gulp.src(path.js.src)
	.pipe(gulpIf(app.isDev, sourcemaps.init()))
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message,
        }))
    }))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(path.js.dest))
};
