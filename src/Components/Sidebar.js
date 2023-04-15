import React, { useContext } from 'react'
import TopbarContext from '../Context/TopbarContext';

function Sidebar() {
  
    let Context = useContext(TopbarContext)
  return (
    <div className='sidebar'>
        <div className="logo_btn">
            <i className="bx bx-menu icon"></i>
            <div className="logo">ELIZA</div>
            <i className="bx bx-menu" id="menu-btn" onClick={()=>{
                document.querySelector('.sidebar').classList.toggle("sidebar-open")
                if(document.querySelector('.sidebar').classList.contains("sidebar-open")){
                    document.querySelector('#menu-btn').classList.replace("bx-menu", "bx-menu-alt-right");
                  }else {
                    document.querySelector('#menu-btn').classList.replace("bx-menu-alt-right","bx-menu");
                  }
            }}></i>
        </div>
        <ul className="menu-items">
            <li  className="Dashboard  current-link" onClick={()=>{
                document.querySelector('.Dashboard').classList.add("current-link")
                document.querySelector('.User').classList.remove("current-link")
                Context.setUserIcon(false)
                Context.setContentName("Dashboard")
            }}>
                <a href="#">
                  <i className='bx bx-grid-alt'></i>
                  <span className="menu-item-name">Dashboard</span>
                </a>
                <span className="tooltip">Dashboard</span>
            </li>
            <li className="User" onClick={()=>{
                document.querySelector('.Dashboard').classList.remove("current-link")
                document.querySelector('.User').classList.add("current-link")
                Context.setUserIcon(true)
                Context.setContentName("User Detail")
            }}>
                <a href="#">
                  <i className='bx bx-user' ></i>
                  <span className="menu-item-name">User</span>
                </a>
                <span className="tooltip">User</span>
            </li>
        </ul>
        <div className="logout-btn">
            <a href="#">
                <i className='bx bx-log-out' id="log-out"></i>
                <span className="menu-item-name">Logout</span>
              </a>
        </div>
    </div>
  )
}

export default Sidebar