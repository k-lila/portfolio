import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`

const GridSkills = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;
  gap: 1svw;
  display: grid;
  animation: ${show} 0.5s forwards;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  img {
    max-height: 75%;
    max-width: 75%;
  }
`
export default GridSkills
