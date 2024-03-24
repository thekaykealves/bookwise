import { styled } from '@/src/pages/styles'

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,

  span: {
    fontSize: '$Text-sm',
    color: '$gray200',
  },

  button: {
    color: '$purple100',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '7px 8px',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '$gray700',
    },
  },
})

export const ListAssessments = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const Assessment = styled('div', {
  padding: 24,
  backgroundColor: '$gray700',
  borderRadius: 8,

  img: {
    width: 40,
    height: 40,
    borderRadius: '50%',
  },

  p: {
    marginTop: 20,
  },

  'div:nth-child(1)': {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const User = styled('div', {
  display: 'flex',
  gap: 16,

  strong: {
    fontSize: '$Heading-xs',
    color: '$gray100',
  },

  span: {
    display: 'block',
    color: '$gray400',
    fontSize: '$Text-sm',
  },
})

export const AddAssessment = styled('div', {
  padding: 24,
  backgroundColor: '$gray700',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
})

export const AddAssessmentHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24,

  svg: {
    width: 28,
    height: 28,
  },

  img: {
    width: 40,
    height: 40,
    borderRadius: '50%',
  },
})

export const AddAssessmentHeaderProfile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const AddAssessmentTextarea = styled('textarea', {
  height: 165,
  borderRadius: 4,
  border: '1px solid $gray500',
  backgroundColor: '$gray800',
  padding: '14px 20px',
  marginBottom: 12,
  resize: 'none',
  color: '$gray200',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: '1px solid $green100',
  },
})

export const AddAssessmentButtons = styled('div', {
  display: 'flex',
  gap: 8,
  marginLeft: 'auto',

  button: {
    width: 40,
    height: 40,
    backgroundColor: '$gray600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    cursor: 'pointer',
  },

  'button:nth-child(1)': {
    color: '$purple100',
  },

  'button:nth-child(2)': {
    color: '$green100',
  },

  'button:hover': {
    backgroundColor: '$gray500',
  },
})
