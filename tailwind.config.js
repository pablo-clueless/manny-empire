module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Barlow', 'sans-serif'],
            mono: ['Share Tech Mono', 'monospace'],
        },
        extend: {
            color: {
                primary: '#E35A44',
            },
            backgroundColor: {
                'primary': '#E35A44',
            },
            textColor:{
                'primary': '#E35A44',
            },
            width: {
                100: '100px',
                150: '150px',
                200: '200px',
                250: '250px',
                300: '300px',
                400: '400px',
                500: '500px',
                80: '80%',
            },
            height: {
                100: '100px',
                150: '150px',
                200: '200px',
                250: '250px',
                300: '300px',
                400: '400px',
                500: '500px',
                90: '90%',
            },
            borderWidth: {
                1: '1px',
            },
            borderColor: {
                'primary': '#E35A44',
            },
            backgroundImage: {
                'vme-logo': "url('./src/assets/images/vme-new-1.jpeg')",
                'image-1': "url('./src/assets/images/image-5.jpeg')",
                'image-2': "url('./src/assets/images/image-6.jpeg')",
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}