import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { Box, styled } from '@mui/material'
import {Chat as MessageIcon, Update} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';


const Component = styled(Box)`
    height:44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items:center;

`
const Wrapper = styled(Box)`
    margin-left: auto; //to make things move to right
    & > *{
        margin-left: 2px;
        padding: 8px;
        color: #000
    };
    
    & :second-child{
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px
    }
`

const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%'
})

const Header = () => {
    const {account} = useContext(AccountContext)
    const [openDrawer,setOpenDrawer] = useState(false);
    console.log("account",account.picture)
    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }
  return (

    <>
        <Component>
            <Image src={account.picture} onClick={toggleDrawer} alt='dp'/>
            <Wrapper>
                <Update/>
                <MessageIcon/>
                <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer}  setOpen={setOpenDrawer}/>
    </>
  )
}

export default Header