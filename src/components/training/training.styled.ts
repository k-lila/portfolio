import styled from 'styled-components'

const Training = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2%;
  justify-content: space-between;
  div {
    font-size: 2svh;
    text-align: justify;
    padding: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.75svw solid black;
    background-color: transparent;
    margin: auto 2%;
    width: 20%;
    height: 75%;
  }
`

export default Training
