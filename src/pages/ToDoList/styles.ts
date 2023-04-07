import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1; // esse componente pode aumentar ou diminuir para caber no espaço reservado a ele

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
  }

  @media screen and (max-width: 550px) {
    width: 1.5rem;
    form {
      gap: 4rem;
    }
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  height: 4rem;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  @media screen and (max-width: 550px) {
    width: 50%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-100']};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['purple-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['purple-500']};
    opacity: 0.7;
  }
  &:not(:disabled):active {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    opacity: 0.5;
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }

  &:not(:disabled):active {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    opacity: 0.5;
  }
`
