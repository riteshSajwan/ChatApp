import { createContext, useEffect, useRef, useState } from "react";
import React from 'react'
import {io} from "socket.io-client"

export const AccountContext = createContext(null);


const AccountProvider = ({children}) => {
    const [account,setAccount] = useState();
    const [person,setPerson] = useState({});
    const [activeUsers,setActiveUsers] = useState({});
    const [newMessageFlag,setNewMessageFlag] = useState(false)

    console.log("account",account)

    const socket = useRef();
    useEffect(()=>{
      socket.current = io('ws://localhost:9000')
    },[])

  return (
    <AccountContext.Provider value={{
        account,setAccount,activeUsers,person,setPerson,setActiveUsers,socket,setNewMessageFlag,newMessageFlag
    }}>
        {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider