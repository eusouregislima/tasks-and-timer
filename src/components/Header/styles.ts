import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme['gray-100']};

  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  padding: 1rem 20rem;

  img {
    width: 150px;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['purple-500']};
      }

      &.active {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
