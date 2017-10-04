import React from 'react'
import {Link} from 'react-router-dom'
import './styles/groupdisplay.css'

function GroupDisplay(props) {
  const groups = props.groups.map(g => (
    <li key={g.id}>
      <Link  className="hvr-grow groupName" to={`/group/${g.id}`}> {g.name} </Link>
    </li>
  ))
  return groups.length ? (
    <div className="group-box">
      <ul>{groups}</ul>
    </div>
  ) : (
    <div className="group-box"> No Groups </div>
  )
}
export default GroupDisplay
