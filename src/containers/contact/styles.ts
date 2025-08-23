import styled from 'styled-components'

export const ContactStyled = styled.div<{ $openabout: boolean }>`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: ${(props) => (props.$openabout ? 'grid' : 'none')};
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1em;
  padding: 1em;
  align-items: center;

  .card {
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(220, 230, 240);
    border-radius: 0.25em;
    align-items: start;
    max-width: 400px;
    height: 10em;
    padding: 1em 2em;
    p {
      font-size: 1.25em;
    }
  }

`
