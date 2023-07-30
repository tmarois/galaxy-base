const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        './docs/.vitepress/**/*.{js,ts,vue}', 
        './docs/**/*.{js,ts,vue,md}', 
        './src/**/*.{js,ts,vue}'
    ],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.blue,
                secondary: colors.indigo,
                neutral: colors.indigo,
            },
        }
    },
}