import React, { useEffect, useRef } from 'react'

import { Exercise } from '../components/Exercise'

import { createRandomEvent } from './utils'

export const Container = ({ dispatch, children }) => {
  const currentIndex = useRef(50)

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({
        type: 'new_event',
        event: createRandomEvent(++currentIndex.current),
      })
    }, 2000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Exercise
      index={3}
      title="Live chart"
      instructions={
        <>
          <p>
            The following graph is a simulation of a live stream of events which
            refresh every 2s. The events are stored in a react reducer. We want
            to be able to edit some events.
          </p>
          <u>Please add the following features:</u>
          <ul style={{ paddingLeft: '0.5rem' }}>
            <li>
              Clicking on a cell makes it editable and allows to edit its value.
            </li>
            <li>The chart must show the correct value.</li>
          </ul>
          <u>Optional:</u>
          <ul style={{ paddingLeft: '0.5rem' }}>
            <li>
              Clicking on the chart may open the cell <code>value1</code> of the
              corresponding event
            </li>
            <li>A button may be added to reset all the updated values</li>
            <li>
              Add some components in the UI that allow to navigate in time.
            </li>
          </ul>
          <u>Additional informations:</u>
          <ul style={{ paddingLeft: '0.5rem' }}>
            <li>
              The <code>Container.js</code> file must not be edited. Consider
              that this is the only constraint.
            </li>
            <li>Use the ui/ux you consider working well for the use case.</li>
          </ul>
        </>
      }
    >
      {children}
    </Exercise>
  )
}
