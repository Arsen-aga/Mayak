module.exports = {
  content: ['./app/*.html', './app/**/*.svg'],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '468px',
      'md': '540px',
      'lg': '720px',
      'xl': '960px',
      '2xl': '1140px',
      '3xl': '1200px',
      '4xl': '1360px',
      '5xl': '1550px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        xs: '16px',
        sm: '16px',
      },
    },
    fontFamily: {
      'roboto-700': 'Roboto-Bold',
      'roboto-500': 'Roboto-Medium',
      'roboto-400': 'Roboto-Regular',
    },
    extend: {
      colors: {
        accent: '#007bfb',
        default: '#2a2a30',
        gray: '#f4f6fb',
      },
      backgroundImage: {
        'section-1': "url('/app/img/bg.jpg')",
      }
    },
  },
  plugins: [],
}
