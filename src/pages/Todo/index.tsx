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
import { useContext, useState } from 'react'
import { Popup } from 'semantic-ui-react'

const Status = zod.enum(['Pendente', 'Em Andamento', 'Concluida', 'Cancelada'])

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

  const { tasks } = useContext(TasksContext)

  const [index, setIndex] = useState(0)

  function getIndex(id: number): void {
    setIndex(id)
  }

  function handleChangeStatus(data: any, index: number): void {
    setStatusTask(data, index)
  }

  return (
    <ToDoContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)} action="">
        <FormProvider {...newTaskForm}>
          <ContainerForm>
            <Input
              id="tasks"
              list="new-task-suggestions"
              placeholder="Adicione as tarefas que vamos fazer hoje..."
              title="Adicionar tarefa"
              {...register('task')}
              minLength={1}
              maxLength={325}
            />

            <datalist id="new-task-suggestions">
              <option value="Estudar " />
              <option value="Trabalhar" />
              <option value="Planejar" />
              <option value="" />
            </datalist>

            {task ? (
              <Button type="submit">
                Criar <PlusCircle size={20} />
              </Button>
            ) : (
              <Button disabled>
                Criar <PlusCircle size={20} />
              </Button>
            )}
          </ContainerForm>
        </FormProvider>
      </form>

      {tasks[0]?.task ? (
        <>
          <Info />
          <Popup
            content="Você pode limpar todas as suas tarefas no final do dia e programar as de amanhã!"
            header="Apagar Tudo"
            trigger={
              <div className="deleteAll">
                <p> Apagar Todas as Tarefas</p>
                <button onClick={deleteAllTasks}>
                  <Trash size={20} />
                </button>
              </div>
            }
          />
        </>
      ) : null}

      {tasks[0]?.task ? (
        tasks.map((task, id) => {
          return (
            <ContainerTask key={id}>
              <div className="inputButton">
                {task.status === 'Pendente' ? (
                  <div className="options-status">
                    <div
                      className="custom-select"
                      title="Mudar Status da tarefa"
                    >
                      <Popup
                        content="Aqui você pode modificar o Status da sua tarefa"
                        header="Mudar Status"
                        trigger={
                          <select
                            id="options"
                            onChange={(data) =>
                              handleChangeStatus(data.target.value, index)
                            }
                            onClick={() => getIndex(id)}
                            value="Pendente"
                          >
                            <option value="Pendente">Pendente</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Concluida">Concluida</option>
                            <option value="Cancelada">Cancelada</option>
                          </select>
                        }
                      />
                    </div>

                    <Checks size={20} color="gray" />
                  </div>
                ) : task.status === 'Em andamento' ? (
                  <div className="options-status">
                    <div className="custom-select">
                      <select
                        id="options"
                        onChange={(data) =>
                          handleChangeStatus(data.target.value, index)
                        }
                        onClick={() => getIndex(id)}
                        value="Em andamento"
                      >
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluida">Concluida</option>
                        <option value="Cancelada">Cancelada</option>
                      </select>
                    </div>

                    <Checks size={20} color="yellow" />
                  </div>
                ) : task.status === 'Concluida' ? (
                  <div className="options-status">
                    <div className="custom-select">
                      <select
                        id="options"
                        onChange={(data) =>
                          handleChangeStatus(data.target.value, index)
                        }
                        onClick={() => getIndex(id)}
                        value="Concluida"
                      >
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluida">Concluida</option>
                        <option value="Cancelada">Cancelada</option>
                      </select>
                    </div>

                    <Checks size={20} color="green" />
                  </div>
                ) : task.status === 'Cancelada' ? (
                  <div className="options-status">
                    <div className="custom-select">
                      <select
                        id="options"
                        onChange={(data) =>
                          handleChangeStatus(data.target.value, index)
                        }
                        onClick={() => getIndex(id)}
                        value="Cancelada"
                      >
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluida">Concluida</option>
                        <option value="Cancelada">Cancelada</option>
                      </select>
                    </div>

                    <Checks size={20} color="red" />
                  </div>
                ) : null}
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
