import styled from 'styled-components'

export const ContentContainerStyled = styled.section<{ $selected: string }>`
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: ${(props) => (props.$selected == 'projects' ? '70svh' : props.$selected == 'contact' ? '20vh' : 0)};
  width: ${(props) => (props.$selected != '' ? '100%' : 0)};
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  @media (max-width: 480px) {
    height: ${(props) => (props.$selected == 'projects' ? '85svh' : props.$selected == 'contact' ? '30vh' : 0)};
  }
`
