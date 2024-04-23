import styled from 'styled-components'

const Training = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  // padding: 2%;
  justify-content: space-between;
  font-size: 0.9em;
  article {
    text-align: justify;
    margin-left: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    line-height: 150%;
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.75svw solid black;
    background-color: transparent;
    margin: auto 3%;
    width: 20%;
    height: 60%;
    -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    a {
      width: 15%;
      -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    }
  }
`

export default Training
