import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: ;
`;
const Search = styled.input`
    width: 280px;
    height: 44px;
    font-size: 15px;
    border-radius: 20px;
    border: none;
    padding-left: 20px;
    background-color: #F9FAFB;
    outline: none;
`

const Navbar = () => {
    return (
        <Nav>
            <Search type="text" placeholder="Search"/>
        </Nav>
    )
};

export default Navbar