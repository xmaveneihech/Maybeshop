import React from "react";
import Navbar from "../src/components/Navbar";
import Aside from "../src/components/Aside";
import styled from "styled-components";
import ComRoute from "./Routes/route";

const Body = styled.body`
  display: flex;
  height: 2000px;
`;
const MainContainer = styled("div")`
  width: 100%;
  background-color: #f4f6f8;
`;

const App = () => {
  return (
    <Body>
      <Aside />
      <MainContainer>
        <Navbar />
        <ComRoute />
      </MainContainer>
    </Body>
  );
};

export default App;
