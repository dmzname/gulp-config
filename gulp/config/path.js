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
        src: pathSrc + "/scss/*.scss",
        watch: pathSrc + "/scss/**/*.scss",
        dest: pathDest + "/css"
    },
    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*js",
        dest: pathDest + "/js/"
    },
    img: {
        src: pathSrc + "/assets/images/*.{png,jpg,jpeg,gif,svg,ico}",
        watch: pathSrc + "/assets/images/**/*.{jpg,jpeg,png,gif,svg,ico}",
        dest: pathDest + "/assets/images/"
    },
    copyFiles: {
        src: pathSrc + "/assets/**/*",
        watch: pathSrc + "/assets/**/*",
        dest: pathDest + "/assets/",
    }
}