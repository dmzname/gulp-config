import gulp from 'gulp';
import browserSync from "browser-sync";
import del from "del";

import path from "./gulp/config/path.js";
import app from "./gulp/config/app.js";

import pugBuild from "./gulp/tasks/pugBuild.js";
import cssBuild from "./gulp/tasks/cssBuild.js";
import jsBuild from "./gulp/tasks/jsBuild.js";
import imgBuild from "./gulp/tasks/imgBuild.js";
import copyBuild from "./gulp/tasks/copyBuild.js";

const clean = () => {
  return del(path.root);
}

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    }
  });
};

const watcher = () => {
  gulp.watch(path.pug.watch, pugBuild).on("change", browserSync.reload);
  gulp.watch(path.css.watch, cssBuild).on("change", browserSync.reload);
  gulp.watch(path.js.watch, jsBuild).on("change", browserSync.reload);
  gulp.watch(path.img.watch, imgBuild).on("change", browserSync.reload);
  gulp.watch(path.copyFiles.watch, copyBuild);
}

const build = gulp.series (
    clean,
    gulp.parallel(pugBuild, cssBuild, jsBuild, imgBuild, copyBuild)
);

const dev = gulp.series (
    build,
    gulp.parallel(watcher, server)
);

export default app.isProd ? build : dev;