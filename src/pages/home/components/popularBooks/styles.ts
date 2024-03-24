import { styled } from '@/src/pages/styles'

export const Container = styled('div', {
  width: 324,
  height: 600,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginTop: 146,
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
    fontSize: '$Text-sm',
    fontWeight: 'bold',
    color: '$purple100',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    padding: 7,
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '$gray700',
    },
  },
})

export const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const Card = styled('div', {
  backgroundColor: '$gray700',
  padding: '18px 20px',
  borderRadius: 7,
  display: 'flex',
  gap: 20,

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  strong: {
    fontSize: '$Heading-xs',
  },

  span: {
    fontSize: '$Text-sm',
    color: '$gray400',
  },
})

export const InfosBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
