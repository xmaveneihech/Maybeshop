import React from "react";
import Navbar from "../src/components/Navbar";
import Aside from "../src/components/Aside";
import styled from "styled-components";
import Home from "./Pages/Home";

const Body = styled.body`
  display: flex;
  height: 2000px;
`;
const MainContainer = styled("div")`
  width: 100%;  
  background-color: #F4F6F8;
`;

const App = () => {
  return (
    <Body>
      <Aside />
      <MainContainer>
        <Navbar />
        <Home />
      </MainContainer>
    </Body>
  );
};

export default App;
