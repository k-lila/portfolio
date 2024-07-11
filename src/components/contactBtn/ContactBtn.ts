import styled from 'styled-components'

const ContactBtn = styled.div`
  background-color: white;
  height: 18%;
  padding: 1%;
  border-top: 1vmin solid black;
  border-bottom: 1vmin solid black;
  border-left: 1vmin solid black;
  display: flex;
  align-items: center;
  border-radius: 5px 0 0 5px;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;
    padding-left: 5px;
  }
  img {
    object-fit: contain;
    height: 80%;
    width: 100%;
  }
  @media screen and (min-width: 1025px) {
    border: 0.75vmin solid black;
    border-radius: 5px;
    width: 80%;
    height: 12%;
    // margin: auto;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
`
export default ContactBtn
