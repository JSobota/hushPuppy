import React from 'react'
import './styles/groupdisplay.css'

function GroupDisplay(props) {
  const groups = props.groups.map(g => (
    <li key={g.id}>
      <span>{ g.id }</span>
      <span>{ g.name }</span>
      <span>{ g.endDate }</span>
    </li>
  ))
  return (
    groups.length ? (
      <div className="group-box">
        <ul>
          { groups }
        </ul>
      </div>
    ) : (
      <div className="group-box"> No Groups </div>
    )
  )
}
export default GroupDisplay