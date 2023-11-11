const pathSrc = "./src";
const pathDest = "./build";

export default {
    root: './build',
    pug: {
        src: pathSrc + "/*.pug",
        watch: pathSrc + "/**/*.pug",
        dest: pathDest,
    },
    css: {
        src: pathSrc + "/assets/scss/*.scss",
        watch: pathSrc + "/assets/scss/**/*.scss",
        dest: pathDest + "/assets/css"
    },
}