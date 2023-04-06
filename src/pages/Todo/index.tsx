import {
  Button,
  ContainerForm,
  ContainerTask,
  Input,
  ToDoContainer,
} from './styles'
import { NoTasksHere } from '../Todo/components/NoTasks'
import { Info } from '../Todo/components/Info'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { Checks, PlusCircle, Trash } from 'phosphor-react'
import { TasksContext } from '../../context/TaskContext'
import { useContext } from 'react'
import { ButtonC } from './components/ButtomCheck'

const Status = zod.enum(['Pendente', 'Em Andamento', 'Concluída', 'Cancelada'])

const NewTaskFormValidationSchema = zod.object({
  task: zod
    .string()
    .min(1, 'Digite uma tarefa')
    .max(327, 'Limite máximo de caracteres atingido'),
  status: Status,
})

type NewTaskFormData = zod.infer<typeof NewTaskFormValidationSchema>

export function ToDo() {
  const { createNewTask, setStatusTask, deleteThisTask, deleteAllTasks } =
    useContext(TasksContext)

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(NewTaskFormValidationSchema),
    defaultValues: {
      task: '',
      status: 'Pendente',
    },
  })

  const { register, handleSubmit, watch, reset } = newTaskForm

  function handleCreateNewTask(data: NewTaskFormData) {
    createNewTask(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  const { tasks } = useContext(TasksContext)

  return (
    <ToDoContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)} action="">
        <FormProvider {...newTaskForm}>
          <ContainerForm>
            <Input
              id="tasks"
              list="new-task-suggestions"
              placeholder="Adicione uma tarefa"
              title="Adicionar tarefa"
              {...register('task')}
              minLength={1}
              maxLength={325}
            />

            <datalist id="new-task-suggestions">
              <option value="Estudar Inglês" />
              <option value="Estudar Javascript" />
              <option value="Projeto Portfólio" />
            </datalist>

            <Button disabled={isSubmitDisabled} type="submit">
              Criar <PlusCircle size={20} />
            </Button>
          </ContainerForm>
        </FormProvider>
      </form>
      <Info />
      <div className="deleteAll">
        <p> Apagar Todas as Tarefas</p>
        <button onClick={deleteAllTasks}>
          <Trash size={20} />
        </button>
      </div>

      {tasks[0]?.task ? (
        tasks.map((task, id) => {
          return (
            <ContainerTask key={id}>
              <div className="inputButton">
                <ButtonC color="gray">
                  <Checks size={20} />
                </ButtonC>
                <ButtonC color="yellow">
                  <Checks size={20} />
                </ButtonC>
                <ButtonC color="green">
                  <Checks size={20} />
                </ButtonC>
                <ButtonC color="red">
                  <Checks size={20} />
                </ButtonC>
              </div>
              <div className="label">
                <label>{task.task}</label>
              </div>
              <div className="svg">
                <button onClick={() => deleteThisTask(id)}>
                  <Trash size={20} />
                </button>
              </div>
            </ContainerTask>
          )
        })
      ) : (
        <NoTasksHere />
      )}
    </ToDoContainer>
  )
}
