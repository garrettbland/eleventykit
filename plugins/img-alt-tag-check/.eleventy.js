const { JSDOM } = require('jsdom')

module.exports = (eleventyConfig, options = {}) => {
    eleventyConfig.addTransform(
        'img-alt-tag-check',
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
                        throw Error(
                            `Missing \`alt\` tag from: ${
                                [...outputPath.split('/')][1]
                            }`
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
