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
        events: state.events.map((event, index) =>
          index === action.editedIndex ? action.editedEvent : event
        ),
      }
    case 'reset_events':
      // I cannot reset the index to 50 on reset event
      // because I am not allowed to edit the Container.jsx file
      return initialState
    default:
      return state
  }
}

export const useLiveChartReducer = () => useReducer(reducer, initialState)
