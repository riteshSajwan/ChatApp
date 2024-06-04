import { createContext, useState } from "react";
import React from 'react'

export const AccountContext = createContext(null);


const AccountProvider = ({children}) => {
    const [account,setAccount] = useState();
    console.log("account",account)
  return (
    <AccountContext.Provider value={{
        account,setAccount
    }}>
        {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider