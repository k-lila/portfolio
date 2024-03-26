import styled from 'styled-components'

type GridProps = {
  $columns: string
  $rows: string
}

const StyledGrid = styled.div<GridProps>`
  padding: 1vmin;
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  grid-template-rows: ${(props) => props.$rows};
  gap: 1vmin;
  transition: all 0.5s;

  align-items: stretch;
  justify-items: stretch;
`
export default StyledGrid
