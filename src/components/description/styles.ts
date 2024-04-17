import styled from 'styled-components'

const DescriptionStyled = styled.article`
  height: 100%;
  text-align: justify;
  font-size: 17px;
  padding: 0.75em;

  > :nth-child(1) {
    height: 90%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 2em;
  }
`
export default DescriptionStyled
