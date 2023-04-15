import React, {  useEffect, useState } from 'react'
import { createContext } from 'react'

let SidebarContext = createContext({user:undefined, sidebarStatus:undefined, onSidebarClick:undefined})

export function SidebarContextProvider(props) {

    let user = "deiva";
    let[sidebarStatus,updateSidebarStatus] = useState("min")

    useEffect(()=>{
      document.querySelector('.Dashboard').classList.add('menu-selected')
    },[])

    function onSidebarClick(){
      const sidebar = document.querySelector('.sidebar');
      const content = document.querySelector('.content-container');
      const appname = document.querySelector('.app-name');
      const menu = document.querySelector('.menu');
      const menuitem = document.querySelector('.Dashboard');
      if(sidebarStatus==="min"){
        appname.textContent = "Eliza"
        updateSidebarStatus("max")
        sidebar.classList.add('sidebar-max')
        content.classList.add('content-container-min')
        menu.classList.add('menuitem-open')
        // menuitem.classList.add('menu-selected')
        menuitem.classList.add('menu-selected-open')
      }
      else{
        appname.textContent = "E"
        updateSidebarStatus("min")
        sidebar.classList.remove('sidebar-max')
        content.classList.remove('content-container-min')
        menu.classList.remove('menuitem-open')
          menuitem.classList.remove('menu-selected-open')
      }
    }

    

    

  return (
    <SidebarContext.Provider value={{user:user, sidebarStatus:sidebarStatus, onSidebarClick:onSidebarClick}}>
        {props.children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext