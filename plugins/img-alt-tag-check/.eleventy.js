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
                    const alt_tag_value = image.getAttribute('alt')
                    if (!alt_tag_value) {
                        throw new Error(
                            `Missing \`alt\` from: ${outputPath}`
                        )
                    }
                })

                return document.documentElement.outerHTML
            } else {
                return content
            }
        }
    )
}
