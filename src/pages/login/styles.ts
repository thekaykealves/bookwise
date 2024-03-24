import { styled } from '../styles'

export const LoginContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '598px auto',
  margin: '20px 24px',
})

export const LoginImageContainer = styled('div', {
  height: '100vh',
  position: 'relative',

  div: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    gap: 12,

    h1: {
      fontSize: 36,
      fontWeight: 'bold',
      lineHeight: '160%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,

      background: '$gradient-horizontal',
      backgroundClip: 'text',
      '-webkit-text-fill-color': 'transparent',
    },
  },

  'img:nth-child(2)': {
    height: '100%',
    borderRadius: 10,
  },
})

export const LoginActions = styled('div', {
  width: 372,
  margin: 'auto',

  strong: {
    fontSize: '$Heading-lg',
    marginBottom: 2,
  },

  p: {
    fontSize: '$Text-md',
    color: '$gray200',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 40,
  },
})

export const AccessButton = styled('button', {
  width: '100%',
  height: 72,
  padding: '20px 24px',
  borderRadius: 8,
  backgroundColor: '$gray600',
  fontSize: '$Button-lg',
  color: '$gray200',
  display: 'flex',
  alignItems: 'center',
  gap: 20,

  cursor: 'pointer',
})
