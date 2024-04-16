import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
export const ImgContainer = styled.div<{ $display: string }>`
  display: ${(props) => props.$display};
  width: 100%;
  height: 100%;
  animation: ${show} 0.5s linear forwards;
  overflow-y: hidden;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
