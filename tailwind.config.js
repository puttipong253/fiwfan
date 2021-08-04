module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}'
    ],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            'white' : '#FFFFFF',
            'pink-1' : '#FAF1FF',
            'pink-2' : '#9A307C',
            'pink-3' : 'rgb(213, 84, 169, 0.6)',
            'pink-4' : '#D554A9',
            'gray-1' : 'rgba(51, 51, 51, 0.3)',
            'gray-2' : '#C1C1C1'
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            pink: '0 4px 6px -1px rgba(182, 126, 166, 0.24), 0 2px 4px -1px rgba(182, 126, 166, 0.24)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'mdx': '950px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },
    variants: {
        extend: {}
    },
    plugins: []
}
