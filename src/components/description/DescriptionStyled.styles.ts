import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const DescriptionStyled = styled.div`
  height: 100%;
  text-align: justify;
  font-size: 17px;
  animation: ${show} 0.5s linear forwards;

  p {
    margin: 1em 0.5em;
  }
`
export default DescriptionStyled
