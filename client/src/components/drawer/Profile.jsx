import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
    display:flex;
    justify-content: center;
`


const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,0.8);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child{
        margin: 14px 0;
        color: #4A4A4A;
     }
`
const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0px'
})

const DiscriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        font-size: 13px;
        color: #8696a0;
    }
`

const Profile = () => {
    const {account} = useContext(AccountContext)
    console.log("account",account)
  return (
    <>
    <ImageContainer>
        <Image src={account?.picture} alt='dp'/>
    </ImageContainer>
    <BoxWrapper>
        <Typography> Your Name</Typography>
        <Typography>{account.name}</Typography>
    </BoxWrapper>
    <DiscriptionContainer>
        <Typography>This is not your username or pin. This name will be visible</Typography>
    </DiscriptionContainer>
    <Box>
        <Typography>About</Typography>
        <Typography>This is Status</Typography>
    </Box>
    </>
  )
}

export default Profile