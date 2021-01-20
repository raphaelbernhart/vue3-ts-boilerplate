module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Raleway', 'Sans-serif']
        },
        container: {
            center: true
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}