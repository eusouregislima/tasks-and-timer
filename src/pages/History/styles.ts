import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  flex: 1; // esse componente pode aumentar ou diminuir para caber no espaço reservado a ele
  padding: 1.5rem auto;

  .history {
    display: flex;
    padding: 1rem;
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    .history {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      width: 60%;
      gap: 1rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
    margin: 0;
  }
  .span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-500']};
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    max-width: 70rem;
  }
  @media screen and (max-width: 620px) {
    div {
      justify-content: center;
      width: 30rem;
      padding: 0 3rem;
    }
  }
`

export const HistoryList = styled.div`
  overflow: auto;
  margin-top: 3rem;
  width: 75rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1000px) {
    width: 43rem;
  }

  table {
    width: 100%;
    border-collapse: collapse; // para não duplicar a borda com os dois tr
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;

        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
        border-bottom-left-radius: 8px;
      }

      &:last-child {
        padding-right: 1.5rem;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    table {
      width: 50%;
    }
  }

  @media screen and (max-width: 620px) {
    table {
      min-width: 380px;
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const
// no as const estou avisando ao typescript que esse texto não irá mudar

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}
// quer dizer que as opções de cores do statusColors são as keys do meu objeto STATUS_COLORS

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
