import React from "react";
import styled from "styled-components";
import Bellicon from "../../images/bell.png";
import Moonicon from "../../images/moon.png";
import Carticon from "../../images/cart.png";

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  background-color: #f6f7f9;
`;
const Search = styled.input`
  width: 220px;
  height: 38px;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  padding-left: 50px;
  background-color: #dfe3e8;
  outline: none;
  margin-left: 20px;
  margin-top: 20px;
`;
const Moon = styled.img`
  position: relative;
  top: 7px;
  left: 465px;
`;
const Bell = styled.img`
  position: relative;
  top: 7px;
  left: 485px;
`;
const Cart = styled.img`
  position: relative;
  top: 7px;
  left: 505px;
`;
const Navbar = () => {
  return (
    <Nav>
      <Search type="text" placeholder="Search" />
      <Moon src={Moonicon} />
      <Bell src={Bellicon} />
      <Cart src={Carticon} />
      <button>Become a seller</button>
    </Nav>
  );
};

export default Navbar;
