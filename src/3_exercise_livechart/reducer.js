import { useReducer } from 'react'

import { createRandomEvent } from './utils'

const initialState = {
  events: Array.from(Array(50)).map((_, ix) => createRandomEvent(ix)),
  selectedEvent: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'new_event':
      return {
        ...state,
        events: [...state.events, action.event],
      }
    case 'select_event':
      return {
        ...state,
        selectedEvent: action.selectedEvent,
      }
    case 'edit_event':
      return {
        ...state,
        events: state.events.map((event) => {
          console.log(event, action)
          if (event.index === action.index) {
            return action.editedEvent
          }
          return event
        }),
      }
    default:
      return state
  }
}

export const useLiveChartReducer = () => useReducer(reducer, initialState)
