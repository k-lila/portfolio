import styled from 'styled-components'
import { MondrianGridProps } from '.'

export const MGrid = styled.div<MondrianGridProps>`
  height: 100%;
  width: 100%;
  gap: 2vmin;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$horizontal ? '1fr' : props.$gridtemplate};
  grid-template-rows: ${(props) =>
    props.$horizontal ? props.$gridtemplate : '1fr'};
  transition: all 0.5s ease-in;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    gap: 3vmin;
  }
  @media screen and (max-width: 767px) {
    gap: 4vmin;
  }
`
