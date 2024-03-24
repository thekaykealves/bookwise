import { styled } from '../../styles'

export const Container = styled('div', {
  height: 550,
  paddingInline: 56,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 146,
  borderLeft: '1px solid $gray700',
  marginLeft: 64,
})

export const PersonalInformation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,

  img: {
    width: 72,
    height: 72,
    borderRadius: '50%',
  },

  'div:nth-child(2)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  strong: {
    fontSize: '$Heading-md',
  },

  span: {
    fontSize: '$Text-sm',
    color: '$gray400',
  },
})

export const ColoredRectangle = styled('div', {
  content: '',
  width: 32,
  height: 4,
  color: '$gray100',
  background: '$gradient-horizontal',
  padding: 1,
  borderRadius: 999,
  marginBlock: 32,
})

export const Infos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
})

export const AboutReading = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 20,

  svg: {
    color: '$green100',
  },

  p: {
    fontSize: '$Text-sm',
    color: '$gray300',
  },
})
