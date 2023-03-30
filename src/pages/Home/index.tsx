import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
// como o zod não tem export default precisou escrever dessa forma
import { useState } from 'react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

// Nesse caso estou validando um objeto
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisar ter no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser no máximo 60 minutos'),
})

// Mostrando como fazer na mão do zero e usando o interface
// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

// Mostrando como utilizar as informações passadas para o zod na variável acima para que ele crie.
// Nesse caso vou usar o type porque são informações que vem de outra fonte

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
// Sempre que preciso referenciar uma variável do javascript dentro do typescript, eu preciso usar o typeof

// Ambas as soluções estão corretas.

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }
    setCycles((state) => [...cycles, newCycle])
    // Sempre que uma alteração de estado depender do seu valor anterior, usamos uma arrow function
    setActiveCycleId(id)

    reset()
  }

  // nessa aula foi apresentado formState do use form para mostrar erros

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  console.log(activeCycle)

  const task = watch('task')
  const isSubmitDisabled = !task
  // fazendo isso para garantir a legibilidade para o código

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play />
          Iniciar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
