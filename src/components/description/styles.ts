import styled from 'styled-components'

const DescriptionStyled = styled.article`
  height: max-content;
  text-align: justify;
  padding: 0 0.75em;

  h3 {
    margin-top: 2%;
    text-align: right;
    letter-spacing: -1px;
    font-size: 110%;
  }
  p {
    margin: 5% 0;
    line-height: 1.75em;
  }

  @media screen and (min-width: 1025px) {
    h3 {
      font-size: 3vmin;
    }
    p {
      font-size: 2.5vmin;
      margin: 3%;
    }
  }
`
export default DescriptionStyled
