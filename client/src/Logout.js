import React from 'react'
import axios from 'axios'

function Logout(props) {
  axios.get('/api/logout').then(r => console.log(r))
  return <div> You've been logged out </div>
}

export default Logout
