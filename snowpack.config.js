module.exports = {
    mount: {
        dist: {
            url: '/',
            static: true,
            resolve: false,
        },
        'src/css': { url: '/css' },
        'src/js': { url: '/js' },
        public: { url: '/' },
    },
    plugins: [
        '@snowpack/plugin-postcss',
        [
            '@snowpack/plugin-run-script',
            {
                cmd: 'eleventy',
                watch: '$1 --watch',
            },
        ],
    ],
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2018',
    },
    buildOptions: {
        clean: true,
        out: 'dist',
    },
}
