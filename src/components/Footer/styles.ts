import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 10px;

  background: ${(props) => props.theme['gray-100']};

  p {
    color: ${(props) => props.theme.black};
  }

  div {
    display: flex;
    gap: 1rem;
    padding: 0.2rem;
    margin-bottom: 0.2rem;
  }

  span {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  svg {
    cursor: pointer;
  }
`
