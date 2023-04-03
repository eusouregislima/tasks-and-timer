import styled from 'styled-components'

export const DontHasHistory = styled.div`
  width: 100%;
  height: 75vh;
  color: ${(props) => props.theme['purple-500']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
  }
`
