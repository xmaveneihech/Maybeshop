import React from "react";
import styled from "styled-components";
import Bellicon from "../../images/free-icon-font-bell-ring (2).png";
import Moonicon from "../../images/free-icon-font-eclipse.png";
import Carticon from "../../images/free-icon-font-shopping-basket (2).png";

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  background-color: #230b34;
`;
const Search = styled.input`
  position: static;
  width: 220px;
  height: 38px;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
  margin-left: 50px;
  margin-top: 20px;
  color: black;
`;
const Moon = styled.img`
  margin-right: 1rem;
  cursor: pointer;
`;
const Bell = styled.img`
  margin-right: 1rem;
  cursor: pointer;
`;
const Cart = styled.img`
  margin-right: 1rem;
  cursor: pointer;
`;
const Navigation = styled("div")`
  margin-right: 30px;
  margin-top: -10px;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #22b07d;
  color: white;
  font-weight: 700;
  width: 150px;
  height: 30px;
  border-radius: 20px;
  &:hover {
    background-color: #1c8d63;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Search type="text" placeholder="Search" />
      <Navigation>
        <Moon src={Moonicon} />
        <Bell src={Bellicon} />
        <Cart src={Carticon} />
        <Button>Стать продавцом</Button>
      </Navigation>
    </Nav>
  );
};

export default Navbar;
