import { HandPalm, Play } from 'phosphor-react'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'

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

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  // trocando a desestruturação por uma variável
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  // trazendo a desestruturação para outra variável para usar
  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  // nessa aula foi apresentado formState do use form para mostrar erros

  const task = watch('task')
  const isSubmitDisabled = !task
  // fazendo isso para garantir a legibilidade para o código

  // na tag FormProvider estamos usando o context do hook-form

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play />
            Iniciar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
