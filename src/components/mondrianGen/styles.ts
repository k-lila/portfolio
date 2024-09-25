import styled from 'styled-components'
import { MondrianGenProps } from '.'

export const MGen = styled.div<MondrianGenProps>`
  background-color: transparent;
  grid-column: ${(props) =>
    props.$gridcolumns ? props.$gridcolumns : 'span 1'};
  grid-row: ${(props) => (props.$gridrows ? props.$gridrows : 'span 1')};
`
