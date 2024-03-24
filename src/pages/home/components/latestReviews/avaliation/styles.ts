import { styled } from '@/src/pages/styles'

export const ContainerCard = styled('div', {
  padding: 24,
  backgroundColor: '$gray700',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  width: 610,
  height: 280,

  variants: {
    lastRead: {
      true: {
        backgroundColor: '$gray600',
        maxHeight: 200,
      },
    },
  },

  '&:hover': {
    border: '1px solid $gray400',
  },
})

export const Profile = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  'div:nth-child(1)': {
    display: 'flex',
    gap: 16,
  },

  span: {
    color: '$gray400',
  },

  variants: {
    lastRead: {
      true: {
        display: 'none',
      },
    },
  },
})

export const Avatar = styled('div', {
  width: 40,
  height: 40,

  position: 'relative',
  zIndex: 2,

  img: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
  },

  '&::before': {
    content: '""',
    background: '$gradient-vertical',
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    zIndex: -1,
    borderRadius: '50%',
  },
})

export const BodyCard = styled('div', {
  display: 'flex',
  gap: 32,
  overflow: 'hidden',
  lineHeight: '160%',
})

export const InfosBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$Heading-xs',
    margin: 0,
  },

  span: {
    color: '$gray300',
  },

  'div:nth-child(2)': {
    span: {
      color: '$gray400',
    },
  },

  p: {
    fontSize: '$Text-sm',
  },
})

export const HeaderBodyCard = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 12,

  span: {
    fontSize: '$Text-sm',
    color: '$gray300',
  },
})

export const TitleAndAuthor = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 24,
})
