import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Trash } from 'phosphor-react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../context/CyclesContext'

export function History() {
  const { cycles, deleteThisCycle, deleteAllHistory } =
    useContext(CyclesContext)

  // Na tag <pre/> eu consigo colocar em tela o JSON que eu quiser

  return (
    <HistoryContainer>
      <div className="history">
        <h1>Meu histórico</h1>
        <span onClick={deleteAllHistory} className="span">
          <Trash color="purple" size="20px" cursor="pointer" />
          <p>Apagar Histórico</p>
        </span>
      </div>
      {/* <pre>{JSON.stringify(cycles, null, 2)}</pre> */}

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle, index) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                  <td>
                    {(cycle.interruptedDate && (
                      <Trash
                        onClick={() => deleteThisCycle(index)}
                        color="red"
                        size="20px"
                        cursor="pointer"
                      />
                    )) ||
                      (cycle.finishedDate && (
                        <Trash
                          onClick={() => deleteThisCycle(index)}
                          color="red"
                          size="20px"
                          cursor="pointer"
                        />
                      ))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
