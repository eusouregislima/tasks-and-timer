import { produce } from 'immer'

import { ActionTypes } from './actions'
import alert from '../../sounds/alert.wav'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }
      // Agora usaremos o immer
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }

      // Considera-se essa parte de código abaixo mais fácil de entender do que a esturutura acima com o map.

      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      const audio = new Audio(alert)

      audio.play()

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }

    case ActionTypes.DELETE_THIS_CYCLE: {
      const currentCycleIndex = action.payload.index

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles.splice(currentCycleIndex, 1)
      })
    }

    case ActionTypes.DELETE_ALL_HISTORY: {
      const activeCycleId = state.activeCycleId

      if (activeCycleId) {
        const cycleActive = state.cycles.filter(
          (cycle) => cycle.id === activeCycleId,
        )
        return produce(state, (draft) => {
          draft.cycles = cycleActive
        })
      } else {
        return produce(state, (draft) => {
          draft.cycles = []
        })
      }
    }

    default:
      return state
  }
}
