import React, { useContext } from 'react'
import TopbarContext from '../Context/TopbarContext'

function Topbar() {

    let Context = useContext(TopbarContext)
  return (
    <div className='topbar'>
        <div className="content-name">{Context.ContentName}</div>
        <div className="usericon" onClick={Context.usericonclick}></div>
    </div>
  )
}

export default Topbar