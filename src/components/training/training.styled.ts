import styled from 'styled-components'

const Training = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  font-size: 0.9em;
  h3 {
    text-align: justify;
    margin: 0 3%;
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
    background-color: white;
    margin: auto 3%;
    width: 10vw;
    height: 60%;
    -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.1s;
    &:active {
      transform: scale(0.95);
    }
    img {
      width: 4vmin;
      height: 4vmin;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    h3 {
      font-size: 3.5vmin;
    }
    a {
      width: 12%;
      -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
    }
  }

  @media screen and (min-width: 1025px) {
    padding: 0 2%;
    h3 {
      font-size: 3vmin;
    }
    a {
      width: 15%;
      border: 0.75vmin solid black;
      -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    }
  }
`

export default Training
