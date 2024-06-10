import { MoreVert, Search } from '@mui/icons-material'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'

import { defaultProfilePicture } from '../../../constants/data'

const Header = styled(Box)`
    height:44px;
    background: #ededed;
    padding: 8px 16px;
    display:flex;
    align-items:center;
`
const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const ChatHeader = ({person}) => {
  return (
    <Header>
        <Image src={person.picture} alt='dp'/>
        <Box>
            <Name>{person.name}</Name>
            <Status>Offline</Status>
        </Box>
        <RightContainer>
            <Search/>
            <MoreVert/>

        </RightContainer>
    </Header>
  )
}

export default ChatHeader