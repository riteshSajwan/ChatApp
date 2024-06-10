import React from "react";
import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";


const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  boxShadow: "none",
  maxHeight: "100%",
  overflow: "hidden",
};

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 16px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

// const QRCode = styled(img)`
//   padding:100px
// `

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext);

  const onLoginSuccess = async(res)=>{
    const decoded = jwtDecode(res.credential)
    console.log("decoded",decoded)
    setAccount(decoded);
    await addUser(decoded); 
  }

  const onLoginError = ()=>{

  }


  return (
    <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your computer</ListItem>
            <ListItem>2. Tap Menu Settings</ListItem>
            <ListItem>
              3. Point your phone to this screen to caputre the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{position:'relative'}}>
          <img src={qrCodeImage} alt="qr code" />
          <Box style={{position:'absolute',top:'50%', transform:'translateX(25%)'}}>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
