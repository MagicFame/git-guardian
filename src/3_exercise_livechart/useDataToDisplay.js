import { useCallback, useState } from 'react'

/**
 * Hook used to calculate the data to display in the live chart.
 * I don't have the time to correct it but I need a fix when I try to see events that don't exist.
 */
export const useDataToDisplay = (events) => {
  const NUMBER_OF_EVENTS_TO_DISPLAY = 20

  const data = events.slice(events.length - NUMBER_OF_EVENTS_TO_DISPLAY)
  const [displayedData, setDisplayedData] = useState(data)

  const seeOlderEvents = useCallback(() => {
    const olderData = events.slice(
      displayedData[0].index - 1,
      displayedData[displayedData.length - 1].index
    )
    setDisplayedData(olderData)
  }, [displayedData])

  const seeNewerEvents = useCallback(() => {
    const newerData = events.slice(
      displayedData[0].index + 1,
      displayedData[0].index + NUMBER_OF_EVENTS_TO_DISPLAY
    )
    setDisplayedData(newerData)
  }, [displayedData])

  return {
    data,
    displayedData,
    seeOlderEvents,
    seeNewerEvents,
  }
}
