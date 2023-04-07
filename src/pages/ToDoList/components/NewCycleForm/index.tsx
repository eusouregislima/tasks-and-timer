import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'

import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'
import { TasksContext } from '../../../../context/TaskContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()
  const { tasks } = useContext(TasksContext)

  return (
    <FormContainer>
      <label htmlFor="task">Atividade:</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="O que vamos fazer hoje?"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        {tasks.map((task) => {
          return <option key={task.task} value={task.task} />
        })}
      </datalist>

      <div className="inputs">
        <label htmlFor="minutesAmount">Tempo</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
