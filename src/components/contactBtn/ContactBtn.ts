import styled from 'styled-components'

const ContactBtn = styled.div`
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
  }
  img {
    height: 80%;
  }
`
export default ContactBtn
