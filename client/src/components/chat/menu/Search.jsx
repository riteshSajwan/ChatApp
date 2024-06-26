import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, styled } from "@mui/material";

const Component = styled(Box)`
  background-color: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  margin: 0 13px;
  width: 100%;
  border-radius: 10px;
`;
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 5px 10px;
  color: #919191;
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 65px;
  font-size: 14px;
  height: 15px;
`;

const Search = ({setText}) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <InputField onChange={(e)=> setText(e.target.value)} placeholder="Search or start new chat" />
      </Wrapper>
    </Component>
  );
};

export default Search;
