import React from 'react'

import { useLiveChartReducer } from './reducer'
import { LiveTable } from './LiveTable'
import { LiveChart } from './LiveChart'
import { Container } from './Container'

const Exercise = ({ dispatch, state }) => {
  const data = state.events.slice(state.events.length - 20)
  return (
    <div style={{ padding: '2rem', width: '1400px' }}>
      <LiveChart
        data={data}
        onChartClick={(selectedEvent) =>
          dispatch({
            type: 'select_event',
            selectedEvent,
          })
        }
        style={{ marginBottom: '2rem' }}
      />
      <LiveTable dispatch={dispatch} data={data} ml={8} mt={8} />
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
