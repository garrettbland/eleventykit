module.exports = {
    content: ['./src/**/*.{html,js,liquid}'],
    theme: {
        variants: {},
        extend: {
            colors: {
                'brand-dark-red': '#EF5050',
                'brand-light-red': '#F8A1A3',
                'brand-light-blue': '#2F429B',
                'brand-dark-blue': '#15245B',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}