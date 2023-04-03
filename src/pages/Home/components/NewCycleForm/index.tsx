import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'

import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  // Esse useformContext só funcioa se houver um provider por volta do componente que está usando.
  // No caso o NewCycleForm que está na home

  return (
    <FormContainer>
      <label htmlFor="task">Atividade:</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="O que vamos fazer hoje?"
        // os dois !! é uma forma de criar um boolean, significa estar true
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Estudar Inglês" />
        <option value="Estudar Javascript" />
        <option value="Projeto Portfólio" />
        <option value="Intervalo" />
      </datalist>

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
    </FormContainer>
  )
}
