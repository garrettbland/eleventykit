const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.liquid'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                ...colors,
            },
            fontFamily: {
                sans: ['"Inter"'],
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
