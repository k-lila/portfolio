import styled from 'styled-components'

export const GridSkills = styled.div`
  padding: 2vmin;
  height: 100%;
  width: 100%;
  row-gap: 10%;
  column-gap: 3vmin;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 45% 45%;

  @media screen and (min-width: 1025px) {
    display: flex;
    padding: 1vmin;
  }
`
export const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto;
    height: 95%;
    max-width: 100%;
    max-height: 100%;
  }
`
