import React from "react";
import styled from "styled-components";

const Footter = styled.footer`
    background-color: aliceblue;
    width: 100%;
    height: 300px;
`

const Footer = () => {
    return (
       <Footter>
        <h1>Hello World</h1>
       </Footter>
    )
}

export default Footer;