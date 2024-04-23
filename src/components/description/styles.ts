import styled from 'styled-components'

const DescriptionStyled = styled.article`
  height: 100%;
  text-align: justify;
  padding: 0.75em;

  p {
    margin: 5% 0;
  }

  > :nth-child(1) {
    height: 90%;
  }
`
export default DescriptionStyled
