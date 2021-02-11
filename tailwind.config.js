module.exports = {
    purge: {
        mode: 'all',
        content: ['./src/**/*.liquid'],
        options: {
            whitelist: [],
        },
    },
    theme: {},
    variants: {},
    plugins: [require('@tailwindcss/typography')],
}
