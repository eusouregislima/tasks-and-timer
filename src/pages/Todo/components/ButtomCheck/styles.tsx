import styled from 'styled-components'

export const ButtonCheck = styled.button`
  width: 1rem;
  height: 1rem;
  border-radius: 999px;
  border: none;
  padding: 1rem;
  cursor: pointer;
  background: none;
  color: ${(props) => props.color};
`
