import { Task, FavoritesTasks } from './reducer'

export enum ActionTypes {
  CREATE_NEW_TASK = 'CREATE_NEW_TASK',
  SET_STATUS_TASK = 'SET_STATUS_TASK',
  DELETE_THIS_TASK = 'DELETE_THIS_TASK',
  DELETE_ALL_TASKS = 'DELETE_ALL_TASKS',
  CREATE_FAVORITES_TASKS = 'CREATE_FAVORITES_TASKS',
}

export function createNewTaskAction(newTask: Task) {
  return {
    type: ActionTypes.CREATE_NEW_TASK,
    payload: {
      newTask,
    },
  }
}

export function setStatusTaskAction(data: string, index: number) {
  return {
    type: ActionTypes.SET_STATUS_TASK,
    payload: {
      data,
      index,
    },
  }
}

export function deleteThisTaskAction(id: number) {
  return {
    type: ActionTypes.DELETE_THIS_TASK,
    payload: {
      id,
    },
  }
}

export function deleteAllTasksAction() {
  return {
    type: ActionTypes.DELETE_ALL_TASKS,
  }
}
