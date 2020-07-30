const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
    /**
     * Pass images folder to dist
     */
    eleventyConfig.addPassthroughCopy('src/images')

    /**
     * Minify HTML
     */
    eleventyConfig.addTransform('htmlmin', function (
        content,
        outputPath
    ) {
        if (outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
            return minified
        }
    })

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src/pages',
            includes: '_includes',
            output: 'dist',
        },
    }
}
