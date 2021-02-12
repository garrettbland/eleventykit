const htmlmin = require('html-minifier')
const lazyloadimages = require('./plugins/lazy-load-images/.eleventy.js')
const imagealttagcheck = require('./plugins/img-alt-tag-check/.eleventy.js')
const ErrorOverlay = require('eleventy-plugin-error-overlay')

module.exports = function (eleventyConfig) {
    /**
     * Setup nice overlay so we are foreced to fix errors
     */
    eleventyConfig.setBrowserSyncConfig({
        ...eleventyConfig.browserSyncConfig,
        // ...stuff
    })
    eleventyConfig.addPlugin(ErrorOverlay)

    /**
     * Pass public folder to top level of dist
     */
    eleventyConfig.addPassthroughCopy({ public: '/' })

    /**
     * Validates that all images have an alt tag & value
     */
    eleventyConfig.addPlugin(imagealttagcheck)

    /**
     * Add native lazy loading to images
     */
    eleventyConfig.addPlugin(lazyloadimages)

    /**
     * Minify HTML
     */
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
        if (outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
        } else {
            return content
        }
    })

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src/pages',
            includes: '../_includes',
            layouts: '../_includes',
            data: '../_data',
            output: 'dist',
        },
    }
}
