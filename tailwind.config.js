
const colors = require('./node_modules/tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.php',
        './template-parts/**/*.php',
        './*.php',
        './inc/**/*.php',
        './inc/*.php',
        './src/**/*.js',
    ],
    darkMode: false, //you can set it to media(uses prefers-color-scheme) or class(better for toggling modes via a button)
    theme: {
        extend: {
            fontFamily: {
                body: ['Avenir', 'sans-serif'],
                proxima: ['"proxima-nova"', 'sans-serif'], // doesn't generate css class font-proxima as expected.
            },
        }
    },
    variants: {},
    plugins: [],
}
