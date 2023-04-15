import React, { useContext } from 'react'
import Userdetail from './Userdetail'
import Dashboard from './Dashboard'
import TopbarContext from '../Context/TopbarContext'

function Maincontent() {

  let Context = useContext(TopbarContext)

  return (
    <div className='maincontent'>
      {!Context.UserIcon && <Dashboard></Dashboard>}
        {Context.UserIcon && <Userdetail></Userdetail>}  
    </div>
  )
}

export default Maincontent