const htmlmin = require('html-minifier')
const Image = require('@11ty/eleventy-img')

const imageShortcode = async (src, alt, sizes = '100vw') => {
    if (alt === undefined) {
        // Throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on myImage from: ${src}`)
    }

    let metadata = await Image(src, {
        widths: [300, 600, 1200],
        formats: ['webp', 'jpeg'],
        outputDir: './dist/images',
        urlPath: './images/',
    })

    let lowsrc = metadata.jpeg[0]

    return `<picture>
      ${Object.values(metadata)
          .map((imageFormat) => {
              return `  <source type="image/${
                  imageFormat[0].format
              }" srcset="${imageFormat
                  .map((entry) => entry.srcset)
                  .join(', ')}" sizes="${sizes}">`
          })
          .join('\n')}
        <img
          src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`

    // let data = metadata.jpeg[metadata.jpeg.length - 1]
    // return `<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async">`
}

module.exports = function (eleventyConfig) {
    /**
     * Pass public folder to top level of dist
     */
    eleventyConfig.addPassthroughCopy({ public: '/' })
    eleventyConfig.addLiquidShortcode('image', imageShortcode)
    /**
     * Minify HTML
     */
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
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
            includes: '../_includes',
            layouts: '../_includes',
            data: '../_data',
            output: 'dist',
        },
    }
}
