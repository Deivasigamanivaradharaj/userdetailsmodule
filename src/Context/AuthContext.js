import React, { createContext, useEffect, useState } from 'react'
import { child, get, getDatabase, ref } from 'firebase/database';
import app from '../Firebase';

let AuthContext = createContext({StaffDetail:[], fetch:undefined, stafflist:undefined})

export function AuthContextProvider(props) {

  let[StaffDetail,setStaffDetail] = useState([])

  const dbRef = ref(getDatabase(app));

  function fetch(){
    get(child(dbRef, 'StaffDB/20TCS05')).then((data)=>{
      if(data.exists()){
        setStaffDetail(data.val())   
      }
      else{
        console.log("No Data Available")
      }
    }).catch((error)=>{
      console.error(error)
    },[fetch]);
  }

  useEffect(()=>{
    fetch();
  })

  const stafflist = (data) => {
    return data;
  }

  return (
    <AuthContext.Provider value={{StaffDetail:StaffDetail, fetch:fetch, stafflist:stafflist}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext