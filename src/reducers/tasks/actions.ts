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

export function setStatusTaskAction(index: number, newStatus: string) {
  return {
    type: ActionTypes.SET_STATUS_TASK,
    payload: {
      index,
      newStatus,
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

// export function createFavoritesTasksAction(favoritesTask: FavoritesTasks) {
//   return {
//     type: ActionTypes.CREATE_FAVORITES_TASKS,
//     payload: {
//       favoritesTask,
//     },
//   }
// }
