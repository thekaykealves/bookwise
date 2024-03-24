import { styled } from '@/src/pages/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 20px',
  border: '1px solid $gray500',
  borderRadius: 4,
  marginBottom: 32,

  '&:focus': {
    outline: '1px solid $green100',
  },

  input: {
    backgroundColor: 'transparent',
    border: 0,
    color: '$gray400',
    fontSize: '$Text-sm',
    outline: 0,
    width: '100%',
  },

  svg: {
    color: '$gray500',
  },
})
