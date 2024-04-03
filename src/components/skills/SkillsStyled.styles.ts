import styled from 'styled-components'

const GridSkills = styled.div`
  height: 100%;
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    li {
      height: 30%;
      align-items: center;
    }
    :nth-child(1),
    :nth-child(3) {
      display: flex;
      justify-content: space-around;
    }
    :nth-child(2) {
      display: flex;
      justify-content: space-evenly;
    }
  }
  img {
    height: 100%;
  }
`
export default GridSkills
