import styled from 'styled-components'

const GridSkills = styled.div`
  height: 100%;
  width: 100%;
  gap: 1svw;
  display: grid;
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
