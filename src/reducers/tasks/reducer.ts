import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Task {
  id: string
  task: string
  status: string
}

interface TasksState {
  tasks: Task[]
}

export interface FavoritesTasks {
  task: string
}

export function tasksReducer(state: TasksState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_TASK:
      return produce(state, (draft) => {
        draft.tasks.push(action.payload.newTask)
      })

    case ActionTypes.SET_STATUS_TASK: {
      const thisTaskIndex = action.payload.index

      if (thisTaskIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.tasks[thisTaskIndex].status = action.payload.data
      })
    }

    case ActionTypes.DELETE_THIS_TASK: {
      const thisTaskIndex = action.payload.id

      if (thisTaskIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.tasks.splice(thisTaskIndex, 1)
      })
    }

    case ActionTypes.DELETE_ALL_TASKS: {
      return produce(state, (draft) => {
        draft.tasks = []
      })
    }

    default:
      return state
  }
}
