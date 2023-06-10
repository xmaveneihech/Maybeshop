import React from "react";
import styled from "styled-components";
import Instagram from "../../images/free-icon-font-instagram (1).png";
import Facebook from "../../images/free-icon-font-facebook.png";
import Telegram from "../../images/free-icon-font-telegram.png";

const Footter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #230b34;
  width: 100%;
  height: 300px;
`;

const H1 = styled("h1")`
  color: white;
  text-align: center;
`;
const Cont = styled("div")`
    width: 200px;
    display: flex;
    justify-content: space-around;
`

const Footer = () => {
  return (
    <Footter>
      <H1>
        Связаться с нами
        <br />
        +998 (90) 900-00-09
      </H1>
      <Cont>
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
        <img src={Telegram} alt="" />
      </Cont>
    </Footter>
  );
};

export default Footer;
