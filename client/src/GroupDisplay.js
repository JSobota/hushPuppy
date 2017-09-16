import React from 'react'

function GroupDisplay(props) {
  const groups = props.groups.map(g => (
    <div key={g.id}>
      <span>{ g.id }</span>
      <span>{ g.name }</span>
      <span>{ g.endDate }</span>
    </div>
  ))
  return (
    <div className="groupBox">
      { groups }
    </div>
  )
}

export default GroupDisplay
