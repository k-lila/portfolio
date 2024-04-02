import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${show} 0.5s linear forwards;
`

export default Img
