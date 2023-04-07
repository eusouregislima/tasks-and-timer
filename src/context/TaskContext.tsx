import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { Task, tasksReducer } from '../reducers/tasks/reducer'

import {
  createNewTaskAction,
  deleteThisTaskAction,
  deleteAllTasksAction,
  setStatusTaskAction,
} from '../reducers/tasks/actions'

interface CreateTaskData {
  task: string
  status: string
}

interface TasksContextType {
  tasks: Task[]
  createNewTask: (data: CreateTaskData) => void
  setStatusTask: (data: string, index: number) => void
  deleteThisTask: (index: number) => void
  deleteAllTasks: () => void
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksContextProviderProps {
  children: ReactNode
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasksState, dispatch] = useReducer(
    tasksReducer,
    {
      tasks: [],
    },

    (initialState) => {
      const storedStateAsJSON = localStorage.getItem('@task:tasks-state-1.0.0')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )

  const { tasks } = tasksState

  useEffect(() => {
    const stateJSON = JSON.stringify(tasksState)
    localStorage.setItem('@task:tasks-state-1.0.0', stateJSON)
  }, [tasksState])

  function createNewTask(data: CreateTaskData) {
    const id = String(new Date().getTime())

    const newTask: Task = {
      id,
      task: data.task,
      status: 'Pendente',
    }

    dispatch(createNewTaskAction(newTask))
  }

  function setStatusTask(data: string, index: number) {
    dispatch(setStatusTaskAction(data, index))
  }

  function deleteThisTask(id: number) {
    dispatch(deleteThisTaskAction(id))
  }

  function deleteAllTasks() {
    dispatch(deleteAllTasksAction())
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createNewTask,
        setStatusTask,
        deleteThisTask,
        deleteAllTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
