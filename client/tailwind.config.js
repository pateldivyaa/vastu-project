/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fef7ed',
                    100: '#fdedd3',
                    200: '#fbd7a5',
                    300: '#f8ba6d',
                    400: '#f59433',
                    500: '#f2730a',
                    600: '#e35a05',
                    700: '#bc4208',
                    800: '#95350e',
                    900: '#772e0f',
                },
                secondary: {
                    50: '#f8f9fa',
                    100: '#f1f3f4',
                    200: '#e8eaed',
                    300: '#dadce0',
                    400: '#bdc1c6',
                    500: '#9aa0a6',
                    600: '#80868b',
                    700: '#5f6368',
                    800: '#3c4043',
                    900: '#202124',
                },
                cream: '#faf8f5',
                gold: '#d4af37',
                beige: '#f5f5dc',
            },
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'lato': ['Lato', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-in-left': 'slideInLeft 0.5s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
