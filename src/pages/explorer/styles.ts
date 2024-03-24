import { styled } from '../styles'

export const Container = styled('div', {
  padding: 24,
  display: 'flex',

  variants: {
    isOpenDetailedBook: {
      true: {
        opacity: 0.4,
      },
    },
  },
})

export const Main = styled('main', {
  flex: 1,
  paddingInline: 96,
  paddingTop: 52,
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 40,

  position: 'relative',

  'div:nth-child(1)': {
    display: 'flex',
    gap: 12,

    svg: {
      color: '$green100',
    },
  },

  'div:nth-child(2)': {
    svg: {
      color: '$gray500',
    },
  },

  input: {
    width: 400,
    borderRadius: 4,

    padding: '14px 20px',
    backgroundColor: '$gray800',
    border: 'none',
    color: '$gray400',
    outline: '1px solid $gray500',

    '&:focus': {
      outline: '1px solid $green100',
    },

    '&::placeholder': {
      color: '$gray400',
    },
  },
})

export const IconInput = styled('div', {
  position: 'absolute',
  right: '20px',
  top: '14px',
})

export const Categories = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 48,

  button: {
    border: '1px solid $purple200',
    padding: '4px 16px',
    color: '$purple100',
    borderRadius: 999,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$purple200',
      color: '$gray100',
      border: '1px solid $purple100',
    },

    '&:focus': {
      backgroundColor: '$purple200',
      color: '$gray100',
    },
  },
})

export const BookGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 20,
})

export const BookCard = styled('div', {
  padding: '16px 20px',
  backgroundColor: '$gray700',
  borderRadius: 8,
  display: 'flex',
  gap: 20,

  position: 'relative',
})

export const TitleAndAuthor = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  span: {
    display: 'block',
    fontSize: '$Text-sm',
    color: '$gray400',
  },
})

export const BookRead = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 50,
  height: 24,
  color: '$green100',
  backgroundColor: '$green300',

  fontSize: '$Text-sm',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0px 8px 0px 8px',
})
