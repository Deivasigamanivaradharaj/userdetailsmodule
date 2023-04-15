import React, { useState } from 'react'
import { createContext } from 'react'

let TopbarContext = createContext({UserIcon:false,ContentName:"Dashboard", usericonclick:undefined, setUserIcon:undefined, setContentName:undefined})

export function TopbarContextProvider(props) {

    let[UserIcon, setUserIcon] = useState(false)
    let[ContentName, setContentName] = useState("Dashboard")

    function usericonclick(){
        document.querySelector('.Dashboard').classList.remove("current-link")
        document.querySelector('.User').classList.add("current-link")
        setUserIcon(true)
        setContentName("User Detail")
    }
    

  return (
    <TopbarContext.Provider value={{UserIcon:UserIcon, ContentName:ContentName, usericonclick:usericonclick, setUserIcon:setUserIcon, setContentName:setContentName}}>
        {props.children}
    </TopbarContext.Provider>
  )
}

export default TopbarContext