const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.liquid'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                ...colors,
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
