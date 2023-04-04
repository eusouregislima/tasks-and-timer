import styled from 'styled-components'

export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`

export const ContainerForm = styled.div`
  padding: 3rem;
  display: flex;
  width: 75rem;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
  }
`

export const Input = styled.input`
  background: ${(props) => props.theme['gray-900']};
  border: 1px solid #0d0d0d;
  border-radius: 8px;

  width: 638px;
  height: 54px;

  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  color: ${(props) => props.theme.white};
  padding: 0 2rem;
  margin-right: 1rem;
`
export const Button = styled.button`
  background: ${(props) => props.theme['purple-300']};
  border-radius: 8px;

  width: 90px;
  height: 52px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;

  color: ${(props) => props.theme.white};
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const ContainerInfo = styled.div`
  width: 53rem;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 1rem;

    .info {
      display: flex;
      gap: 0.4rem;

      p {
        margin: 0;
      }
    }
  }

  div {
    background: #333333;
    border-radius: 9999px;

    height: 19px;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme['purple-500']};
  margin: 0;
`

export const ContainerTask = styled.div`
  width: 736px;
  height: 72px;

  background: ${(props) => props.theme['gray-700']};
  margin-top: 1rem;

  border: 1px solid ${(props) => props.theme['gray-600']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    &:hover {
      color: red;
    }
    &:active {
      opacity: 0.7;
    }
  }

  .input {
    width: 4rem;
    padding: 1.5rem;
    margin-right: 1rem;

    button {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      border: none;
      padding: 1rem;

      cursor: pointer;
      background: none;
      border: none;

      &:hover {
        color: green;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }

  .label {
    width: 43rem;
  }

  .svg {
    padding: 1rem;
    cursor: pointer;
  }
`
