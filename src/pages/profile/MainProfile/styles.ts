import { styled } from '../../styles'

export const Container = styled('div', {
  marginLeft: 96,
  marginTop: 72,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})

export const TopTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 40,

  strong: {
    fontSize: '$Heading-lg',
  },

  svg: {
    color: '$green100',
  },
})

export const BackButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: '$Button-md',
  fontWeight: 'bold',
  color: '$gray200',
  marginBottom: 40,
  cursor: 'pointer',
})

export const BooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const Book = styled('div', {
  'span:nth-child(1)': {
    fontSize: '$Text-sm',
    color: '$gray300',
  },
})

export const BookCard = styled('div', {
  padding: 24,
  backgroundColor: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  borderRadius: 8,
  marginTop: 8,

  '> div': {
    display: 'flex',
    gap: 24,
  },

  p: {
    fontSize: '$Text-sm',
    color: '$gray300',
  },
})

export const TitleAndAuthor = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  'div:nth-child(1)': {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },

  span: {
    fontSize: '$Text-sm',
    color: '$gray400',
  },
})
