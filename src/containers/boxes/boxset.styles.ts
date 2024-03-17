import styled from 'styled-components'

const BoxSet = styled.div`
  position: absolute;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  top: 54%;
  left: 50%;
  width: 90%;
  max-width: 500px;
  height: 85%;
  border-radius: 10px;
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 600px;
    height: 80%;
  }
`

export default BoxSet