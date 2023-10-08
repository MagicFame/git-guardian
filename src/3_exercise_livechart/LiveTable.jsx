import React from 'react'

const Cell = ({ children, onChangeCell, event, valueType }) => {
  const [isEditing, setIsEditing] = React.useState(false)
  return (
    <div
      style={{
        border: '1px solid',
        display: 'inline-block',
        width: '60px',
        height: '40px',
        padding: '0.25rem',
      }}
      onClick={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
    >
      <input
        readOnly={!isEditing}
        defaultValue={children}
        style={{
          border: 'none',
          width: '60px',
          height: '40px',
        }}
        id={`cell-${valueType ?? ''}-${event ? event.index : ''}`}
        onChange={(e) => {
          e.stopPropagation()
          if (onChangeCell) {
            const editedEvent = {
              ...event,
              [valueType]: isNaN(e.target.value) ? 0 : Number(e.target.value),
            }
            onChangeCell(event.index, editedEvent)
          }
        }}
      />
    </div>
  )
}

export const LiveTable = ({ data, onChangeCell, ...props }) => {
  const VALUE_1 = 'value1'
  const VALUE_2 = 'value2'
  return (
    <div {...props}>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell>Index</Cell>
        {data.map((event) => {
          return (
            <Cell key={event.index} index={event.index}>
              {event.index}
            </Cell>
          )
        })}
      </div>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell>Value 1</Cell>
        {data.map((event) => {
          return (
            <Cell
              onChangeCell={onChangeCell}
              key={event.index}
              event={event}
              valueType={VALUE_1}
            >
              {event.value1}
            </Cell>
          )
        })}
      </div>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell>Value 2</Cell>
        {data.map((event) => {
          return (
            <Cell
              onChangeCell={onChangeCell}
              key={event.index}
              event={event}
              valueType={VALUE_2}
            >
              {event.value2}
            </Cell>
          )
        })}
      </div>
    </div>
  )
}
