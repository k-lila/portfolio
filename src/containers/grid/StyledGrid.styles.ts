import styled from 'styled-components'

type GridProps = {
  $columns: string
  $rows: string
}

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  gap: 1vmin;
  grid-template-columns: ${(props) => props.$columns};
  grid-template-rows: ${(props) => props.$rows};

  transition: all 0.5s;
`
export const GridContainer = styled.main`
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`
