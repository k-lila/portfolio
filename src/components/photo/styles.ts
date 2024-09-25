import styled from 'styled-components'

export const PhotoStyled = styled.div`
  display: flex;
  width: 10vw;
  height: 10vw;
  margin: auto;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    margin-top: 10vw;
    margin-bottom: 10vw;
    width: 50vw;
    height: 50vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 25vw;
    height: 25vw;
  }
`
