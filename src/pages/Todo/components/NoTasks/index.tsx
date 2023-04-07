import { NoTasks } from './styles'

import { ClipboardText, Timer } from 'phosphor-react'

export function NoTasksHere() {
  return (
    <NoTasks>
      <ClipboardText size={50} />
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <p>Crie tarefas e organize seus itens a fazer</p>
      <br />
      <br />
      <p style={{ color: 'white' }}>
        Utilize <b>Pomodoro Timer</b> no menu {<Timer size={18} />} para
        controlar o tempo de execução da tarefa e do descanso
      </p>
    </NoTasks>
  )
}
