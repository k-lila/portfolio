import styled from 'styled-components'

const BoxSet = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  top: 54%;
  left: 50%;
  width: 95%;
  max-width: 500px;
  max-height: 1000px;
  height: 85%;
  border-radius: 10px;
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 600px;
  }
`

export default BoxSet
