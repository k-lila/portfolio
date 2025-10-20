import styled from 'styled-components'

export const InternalContentStyled = styled.div<{
  $openinternal: boolean
  $spancolumn: number
  $spanrow: number
}>`
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$openinternal ? 1 : 0)};
  grid-column: span ${(props) => props.$spancolumn};
  grid-row: span ${(props) => props.$spanrow};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  position: relative;
`
