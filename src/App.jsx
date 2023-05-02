import React from "react";
import Navbar from "../src/components/Navbar";
import Aside from "../src/components/Aside";
import styled from "styled-components";

const Body = styled.body`
  background-color: red;
  display: flex;
  height: 1000px;
`;

const App = () => {
  return (
    <Body>
      <Aside />
      <Navbar />
    </Body>
  );
};

export default App;
