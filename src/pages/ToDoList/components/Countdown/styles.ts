import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem;
    border-radius: 8px;
  }
  @media screen and (max-width: 700px) {
    gap: 0.5rem;

    span {
      padding: 1rem;
      width: 5rem;
      font-size: 5rem;
      height: 11rem;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['purple-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 2rem;
    font-size: 5rem;
  }
`
