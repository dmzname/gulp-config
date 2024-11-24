import gulp from "gulp";

import path from "../config/path.js";
import app from "../config/app.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulpIf from "gulp-if";

import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import sourcemaps from "@sequencemedia/gulp-sourcemaps";

export default () => {
    return gulp.src(path.css.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "CSS",
                message: error.message,
            }))
        }))
    .pipe(gulpIf(app.isDev, sourcemaps.init()))
        .pipe(sass({
            silenceDeprecations: ['legacy-js-api'],
          }))
        .pipe(gulpIf(app.isProd, autoprefixer(app.autoprefixer)))
        .pipe(gulpIf(app.isDev, sourcemaps.write()))
        .pipe(gulpIf(app.isProd, cleanCSS(app.cleanCSS)))
        .pipe(rename(app.renameCSS))
        .pipe(gulp.dest(path.css.dest))
}