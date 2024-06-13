import React, { useState,useContext } from 'react'
import { useEffect } from 'react'
import {Box, Divider, styled} from '@mui/material'
import { getUsers } from '../../../service/api'
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    height:81vh;
    overflow:overlay;
`
const test = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
`

export const Conversations = ({text}) => {
  const [users,setUser] = useState([]);
  const {account} = useContext(AccountContext);

  useEffect(()=>{
    const fetchData = async()=>{
      let res = await getUsers();
      const filterData = res.filter((val)=> val.name.toLowerCase().includes(text.toLowerCase()))
      
      console.log("filterData",filterData)
      setUser(filterData);
    }
    fetchData();
  },[text])

  console.log("users",users)
  
  return (
    <Component>
      {
        users.map(user=>
          (
            user.sub!==account.sub &&
            <>
            <Conversation user={user}/>
            <styledDivider/>
            </>
          )
        )
      }
    </Component>
  )
}
