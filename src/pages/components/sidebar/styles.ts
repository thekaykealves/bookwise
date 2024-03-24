import { styled } from '@/src/pages/styles'

export const Container = styled('div', {
  width: 232,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingInline: 52,
  paddingBottom: 24,
  position: 'relative',

  img: {
    borderRadius: 12,
    maxHeight: '100vh',
  },
})

export const Header = styled('div', {
  display: 'flex',
  gap: 8,

  strong: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: '$Heading-md',
    fontWeight: 'bold',
    background: '$gradient-horizontal',
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    marginBottom: 64,
  },
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

export const ButtonAction = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  color: '$gray400',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
  },

  '&.active::before': {
    color: '$gray100',
    content: '',
    width: 2,
    height: 24,
    background: '$gradient-vertical',
    borderRadius: 999,
    padding: 1,
  },

  '&.active': {
    color: '$gray100',
    fontWeight: 'bold',
  },
})

export const ButtonLogin = styled('button', {
  fontSize: '$Button-md',
  color: '$gray200',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  svg: {
    color: '$green100',
  },
})

export const ButtonLogout = styled('button', {
  fontSize: '$Text-sm',
  color: '$gray200',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  svg: {
    color: 'red',
  },

  span: {
    whiteSpace: 'nowrap',
  },
})

export const Avatar = styled('div', {
  width: 32,
  height: 32,

  position: 'relative',
  zIndex: 2,

  img: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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

export const BackgroundImage = styled('div', {
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,

  img: {
    borderRadius: 12,
  },
})
