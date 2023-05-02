import React from "react";
import styled from "styled-components";
import Bellicon from "../../images/bell.png";
import Moonicon from "../../images/moon.png";
import Carticon from "../../images/cart.png";

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
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
  margin-right: 1rem;
`;
const Bell = styled.img`
  margin-right: 1rem;
`;
const Cart = styled.img`
  margin-right: 1rem;
`;
const Navigation = styled("div")`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffd500;
  width: 150px;
  height: 30px;
  border-radius: 20px;
  &:hover {
    background-color: #f6cd00;
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
        <Button>Become a seller</Button>
      </Navigation>
    </Nav>
  );
};

export default Navbar;
