import styled from 'styled-components'

export const ContentContainerStyled = styled.section<{ $open: boolean }>`
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: ${(props) => (props.$open ? '70svh' : 0)};
  width: ${(props) => (props.$open ? '100%' : 0)};
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  @media (max-width: 480px) {
    height: ${(props) => (props.$open ? '85svh' : 0)};
  }
`
