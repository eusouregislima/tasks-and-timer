import { ContainerInfo, Text } from './styles'
import { TasksContext } from '../../../../context/TaskContext'
import { useContext } from 'react'

export function Info() {
  const { tasks } = useContext(TasksContext)
  console.log(tasks)

  const totalCompleted = tasks.reduce((total, task) => {
    if (task.status === 'Concluída') {
      return total + 1
    } else {
      return total
    }
  }, 0)

  const inProgress = tasks.reduce((total, task) => {
    if (task.status === 'Em andamento') {
      return total + 1
    } else {
      return total
    }
  }, 0)

  return (
    <ContainerInfo>
      <span>
        <Text>Tarefas criadas</Text>
        <div>
          <p>{tasks.length}</p>
        </div>
      </span>
      <span>
        <Text>Tarefas em andamento</Text>
        <div>
          <p>{inProgress}</p>
        </div>
      </span>
      <span>
        <Text>Concluídas</Text>
        <div className="info">
          <p>{totalCompleted}</p> <p>de</p> <p>{tasks.length}</p>
        </div>
      </span>
    </ContainerInfo>
  )
}
