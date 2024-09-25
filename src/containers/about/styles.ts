import styled from 'styled-components'

export const AboutStyled = styled.div`
  color: white;
  width: 100%;
  height: fit-content;
  display: grid;
  align-items: start;
  row-gap: 3vmin;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  margin-bottom: 2vmin;
  @media screen and (max-width: 767px) {
    display: block;
    margin-bottom: 2em;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-rows: auto auto;
    margin-bottom: 0;
    gap: 0;
  }
`
