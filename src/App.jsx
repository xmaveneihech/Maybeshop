import React from "react";
import Navbar from "../src/components/Navbar";
import Aside from "../src/components/Aside";
import styled from "styled-components";
import ComRoute from "./Routes/route";
import Footer from "../src/components/Footer";

const Body = styled.body`
  display: flex;
  height: 2500px;
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
        <Footer />
      </MainContainer>
    </Body>
  );
};

export default App;
