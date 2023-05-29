import React from "react";
import Navbar from "../src/components/Navbar";
import Aside from "../src/components/Aside";
import styled from "styled-components";
import ComRoute from "./Routes/route";
import Footer from "../src/components/Footer";
import Home from "./Pages/Home";

const Body = styled.body`
  display: flex;
  height: 2500px;
`;
const MainContainer = styled("div")`
  width: 100%;
  background-color: white;
`;

const App = () => {
  return (
    <Body>
      <Aside />
      <MainContainer>
        <Navbar />
        <ComRoute />
        <Home />
        <Footer />
      </MainContainer>
    </Body>
  );
};

export default App;
