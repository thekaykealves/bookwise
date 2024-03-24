import { styled } from '../../styles'

export const Container = styled('div', {
  width: 515,
  height: 340,
  padding: '56px 72px',
  backgroundColor: '$gray700',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 12,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 40,

  p: {
    fontSize: '$Heading-xs',
    color: '$gray200',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },
})

export const ButtonLogin = styled('button', {
  padding: '20px 24px',
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  backgroundColor: '$gray600',
  borderRadius: 8,

  color: '$gray200',
  fontSize: '$Button-lg',
  fontWeight: 'bold',

  cursor: 'pointer',
})

export const ButtonClose = styled('button', {
  position: 'absolute',
  top: 16,
  right: 16,
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
