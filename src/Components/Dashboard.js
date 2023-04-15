import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

function Dashboard() {

  let Context = useContext(AuthContext)
  return (
    <div>
      <button onClick={Context.fetch()}></button>
    </div>
  )
}

export default Dashboard