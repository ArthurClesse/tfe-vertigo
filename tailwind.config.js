module.exports = {
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        transparent: 'transparent',
        neon: '#E7FE98',
        cream: '#FBFFE5',
        purple: '#CE7DF5',
      },
      fontFamily: {
        'sans' : ['Helvetica Neue', 'Arial', 'sans_serif'],
        'serif' : ['Georgia','Times','Times New Roman','serif']
      },
      fontSize: {
        'tiny' : '1.2rem',
        'base' : '1.8rem',
        'lg': '2.2rem',
        '2lg': '2.8rem',
        'xl': '3.4rem',
        '2xl': '5.6rem',
        '3xl': '9.2rem',
        '4xl': '17rem',
      },
      // Aspect ratio
      aspectRatio: {
        '16/9': [16, 9],
        '4/3': [4, 3],
        '21/9': [21, 9],
        '1/1': [1, 1],
        '3/4': [3, 4]
      },
      height: {
        '1px': '1px',
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
      },
      width: {
        '1px': '1px',
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
      },
      backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
    },
  },
  extend: {
    maxWidth: {
      '7xl':'88rem',
      'screen-sm':'64rem',
      'screen-md':'76.8rem',
      'screen-lg':'102.4rem',
      'screen-xl':'128rem'
    },
    translate: {
      'center': ['-50%', '-50%']
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-filters'),
  ],
}
