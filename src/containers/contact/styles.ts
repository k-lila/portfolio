import styled from 'styled-components'

export const ContactStyled = styled.div<{ $openabout: boolean }>`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: ${(props) => (props.$openabout ? 'grid' : 'none')};
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  gap: 1em;
  padding: 1em;
  align-items: center;

  .card {
    flex-direction: column;
    justify-content: space-evenly;
    background-color: transparent;
    align-items: start;
    max-width: 600px;
    p {
      font-size: 1.25em;
    }
  }

`
