import styled from 'styled-components'
import { showComponent } from '../../styles/animations'

const Container = styled.div<{ $display: string }>`
  height: 100%;
  width: 100%;
  display: ${(props) => (props.$display ? props.$display : 'none')};
  animation: ${showComponent} 0.1s ease-in;
`
export default Container
