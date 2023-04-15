import React from 'react'
import Topbar from './Topbar'
import Maincontent from './Maincontent'

function Container() {
  return (
    <div className='container'>
      <Topbar></Topbar>
      <Maincontent></Maincontent>
    </div>
  )
}

export default Container