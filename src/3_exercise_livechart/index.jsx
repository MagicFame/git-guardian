import React, { useEffect, useState } from 'react'

import { useDataToDisplay } from './useDataToDisplay'
import { useLiveChartReducer } from './reducer'
import { LiveTable } from './LiveTable'
import { LiveChart } from './LiveChart'
import { Container } from './Container'

const Exercise = ({ dispatch, state }) => {
  const { data, displayedData, seeOlderEvents, seeNewerEvents } =
    useDataToDisplay(state.events, dispatch)

  useEffect(() => {
    if (state.selectedEvent !== null) {
      const cell = document.getElementById(`cell-value1-${state.selectedEvent}`)
      if (cell) cell.focus()
    }
  }, [state.selectedEvent])

  return (
    <div style={{ padding: '2rem', width: '1400px' }}>
      <button onClick={seeOlderEvents}>See older events</button>
      <button onClick={seeNewerEvents}>See newer events</button>
      <LiveChart
        data={displayedData}
        onChartClick={(selectedEvent) =>
          dispatch({
            type: 'select_event',
            selectedEvent,
          })
        }
        style={{ marginBottom: '2rem' }}
      />
      <LiveTable
        data={data}
        ml={8}
        mt={8}
        onChangeCell={(editedIndex, editedEvent) => {
          dispatch({
            type: 'edit_event',
            editedEvent,
            editedIndex,
          })
        }}
      />
      <button
        style={{ marginTop: '1rem ' }}
        onClick={() => dispatch({ type: 'reset_events' })}
      >
        Reset events
      </button>
    </div>
  )
}

export const ExerciseLiveChart = () => {
  const [state, dispatch] = useLiveChartReducer()

  return (
    <Container dispatch={dispatch}>
      <Exercise dispatch={dispatch} state={state} />
    </Container>
  )
}
