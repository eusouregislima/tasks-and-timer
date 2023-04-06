import { NoTasks } from './styles'

import { ClipboardText } from 'phosphor-react'

export function NoTasksHere() {
  return (
    <NoTasks>
      <ClipboardText size={50} />
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </NoTasks>
  )
}
