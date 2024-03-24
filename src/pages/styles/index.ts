import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      green100: '#50B2C0',
      green200: '#255D6A',
      green300: '#0A313C',

      purple100: '#8381D9',
      purple200: '#2A2879',

      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray300: '#D1D6E4',
      gray400: '#8D95AF',
      gray500: '#303F73',
      gray600: '#252D4A',
      gray700: '#181C2A',
      gray800: '#0E1116',

      'gradient-horizontal':
        'linear-gradient(90deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 70%)',
      'gradient-vertical':
        'linear-gradient(180deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 100%)',
    },

    fontSizes: {
      'Heading-lg': '24px',
      'Heading-md': '20px',
      'Heading-sm': '18px',
      'Heading-xs': '16px',

      'Text-lg': '20px',
      'Text-md': '16px',
      'Text-sm': '14px',

      'Button-lg': '18px',
      'Button-md': '16px',
      'Button-sm': '14px',
    },
  },
})
