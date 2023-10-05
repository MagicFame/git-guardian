import React from 'react'

const Cell = ({ index, children, dispatch }) => {
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
        onChange={(e) => {
          e.stopPropagation()
          dispatch({
            type: 'edit_event',
            index,
          })
        }}
      />
    </div>
  )
}

export const LiveTable = ({ data, dispatch, ...props }) => {
  return (
    <div {...props}>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell dispatch={dispatch}>Index</Cell>
        {data.map((event) => {
          return (
            <Cell dispatch={dispatch} key={event.index} index={event.index}>
              {event.index}
            </Cell>
          )
        })}
      </div>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell dispatch={dispatch}>Value 1</Cell>
        {data.map((event) => {
          return (
            <Cell dispatch={dispatch} key={event.index} index={event.index}>
              {event.value1}
            </Cell>
          )
        })}
      </div>
      <div style={{ height: '42px', overflow: 'hidden' }}>
        <Cell dispatch={dispatch}>Value 2</Cell>
        {data.map((event) => {
          return (
            <Cell dispatch={dispatch} key={event.index} index={event.index}>
              {event.value2}
            </Cell>
          )
        })}
      </div>
    </div>
  )
}
