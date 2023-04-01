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
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        // os dois !! é uma forma de criar um boolean, significa estar true
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto IGNITE" />
        <option value="Projeto TO DO" />
        <option value="Leitura" />
        <option value="Soneca" />
        <option value="" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
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
