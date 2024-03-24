import { styled } from '../../styles'

export const Container = styled('div', {
  padding: '64px 48px',
  backgroundColor: '$gray800',
  width: 660,
  position: 'fixed',
  top: 0,
  right: 0,
  overflowY: 'scroll',
  height: '100vh',

  '&::-webkit-scrollbar': {
    width: 6,
    backgroundColor: '$gray700',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: 999,
  },

  variants: {
    isOpenDetailedBook: {
      false: {
        display: 'none',
      },
    },
  },
})

export const ButtonClose = styled('button', {
  position: 'absolute',
  top: 24,
  right: 48,
  cursor: 'pointer',

  svg: {
    width: 24,
    height: 24,
    color: '$gray400',
  },

  '&:hover': {
    transition: 'ease-in 0.2s',
    opacity: 0.8,
  },
})

export const BookCard = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: 10,
  padding: '24px 32px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 33,

  img: {
    width: 170,
    height: 242,
  },
})

export const AboutBook = styled('div', {
  display: 'flex',
  gap: 32,
})

export const TitleAndAuthor = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  strong: {
    fontSize: '$Heading-sm',
  },

  p: {
    color: '$gray400',
    marginTop: 8,
  },

  span: {
    fontSize: '$Text-sm',
    color: '$gray400',
  },

  svg: {
    width: 20,
    height: 20,
  },
})

export const InfosBookBox = styled('div', {
  display: 'flex',
  gap: 56,
  height: 92,
  marginTop: 40,
  borderTop: '1px solid $gray600',
})

export const InfosBook = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  svg: {
    color: '$green100',
  },

  span: {
    fontSize: '$Text-sm',
    color: '$gray300',
  },

  p: {
    fontSize: '$Heading-xs',
    color: '$gray200',
    fontWeight: 'bold',
  },
})
