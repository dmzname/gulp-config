const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,
    autoprefixer: {
        cascade: isProd
    },
    cleanCSS: {
        level: 2
    },
    renameCSS: {
        suffix: ".min",
        extname: ".css"
    },
    renameJS: {
        suffix: ".min",
        extname: ".js"
    },
}