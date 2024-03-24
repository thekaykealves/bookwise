import { styled } from '@/src/pages/styles'

export const Container = styled('main', {
  marginTop: 72,
})

export const StartTitle = styled('strong', {
  fontSize: '$Heading-lg',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 40,

  svg: {
    color: '$green100',
  },
})

export const Avaliations = styled('div', {
  marginBottom: 16,

  span: {
    fontSize: '$Text-sm',
  },

  '> div': {
    marginBottom: 40,
  },
})

export const LastRead = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,

  button: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '$purple100',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: 7,
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '$gray700',
    },
  },

  span: {
    fontSize: '$Text-sm',
  },
})

export const BookListing = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  marginTop: 40,

  span: {
    fontSize: '$Text-sm',
  },
})
