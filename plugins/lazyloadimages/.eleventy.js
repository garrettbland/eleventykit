const { JSDOM } = require('jsdom')

module.exports = (eleventyConfig, options = {}) => {
    eleventyConfig.addTransform(
        'lazyloadimages',
        (content, outputPath) => {
            if (outputPath.endsWith('.html')) {
                const dom = new JSDOM(content)
                const document = dom.window.document

                const [...images] = document.getElementsByTagName(
                    'img'
                )

                images.forEach((image) => {
                    image.setAttribute('loading', 'lazy')
                })

                return document.documentElement.outerHTML
            } else {
                return content
            }
        }
    )
}
