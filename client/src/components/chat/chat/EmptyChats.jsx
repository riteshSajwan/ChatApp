import { Box, Divider, Typography, styled } from '@mui/material'
import React from 'react'
import { emptyChatImage } from '../../../constants/data'

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100vh;
`

const Conatiner = styled(Box)`
    padding: 0 200px;
`
const Image = styled('img')({
    width:400,
    marginTop: 100
})

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`
const SubTitile = styled(Typography)`
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  color: #667781;
`
const StyleDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`

const EmptyChats = () => {
  return (
    <Component>
      <Conatiner>
        <Image src={emptyChatImage} alt='image'/>
        <Title> WhatsApp Web</Title>
        <SubTitile> Now send and receive messages without keeping you phone online</SubTitile>
        <SubTitile> Lorem ipsum, elit. Neque mollitia eos, aut inventore accusamus illum at sapiente eius facilis adipisci. Laborum, alias.</SubTitile>
        <StyleDivider/>
      </Conatiner>
    </Component>
  )
}

export default EmptyChats