import { Dialog,Box, styled } from '@mui/material'
import React, { useContext } from 'react'
import Menu from '../chat/menu/Menu'
import EmptyChats from '../chat/chat/EmptyChats'
import ChatBox from './chat/ChatBox'
import { AccountContext } from '../../context/AccountProvider'

const Component = styled(Box)`
display:flex;
`
const LeftComponent = styled(Box)`
min-width: 450px;
`
const RightComponent = styled(Box)`
width: 73%;
height: 100%;
border-left: 1px solid rgba(0,0,0,0.14);
min-width: 300px;
`

const dialogStyle = {
height: "96%",
margin: "20px",
borderRadius:0,
width: "100%",
maxWidth: "100%",
boxShadow: "none",
maxHeight: "100%",
overflow: "hidden",
};

const ChatDialoge = () => {

 const { person} = useContext(AccountContext)
 console.log("person",person)
  return (
    <Dialog
    open={true}
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    maxWidth={'md'}
    >
      <Component>
        <LeftComponent>
          <Menu/>
        </LeftComponent>
        <RightComponent>
          {
            Object.keys(person)?.length?
            <ChatBox/>
            :
            <EmptyChats/>

          }
        </RightComponent>
      </Component>

    </Dialog>
  )
}

export default ChatDialoge