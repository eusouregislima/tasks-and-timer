import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  DELETE_THIS_CYCLE = 'DELETE_THIS_CYCLE',
  DELETE_ALL_HISTORY = 'DELETE_ALL_HISTORY',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function deleteThisCicleAction(index: number) {
  return {
    type: ActionTypes.DELETE_THIS_CYCLE,
    payload: {
      index,
    },
  }
}

export function deleteAllHistoryAction() {
  return {
    type: ActionTypes.DELETE_ALL_HISTORY,
  }
}
