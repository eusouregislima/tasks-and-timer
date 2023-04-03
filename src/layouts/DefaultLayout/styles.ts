import styled from 'styled-components'

export const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;

  margin: auto;

  background: ${(props) => props.theme['gray-800']};

  display: flex;
  flex-direction: column;
  padding-bottom: 7.5rem;
`
