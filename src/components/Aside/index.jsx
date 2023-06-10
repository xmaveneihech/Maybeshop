import React, { useState } from "react";
import styled from "styled-components";
import Homeicon from "../../images/house.png";
import Discovericon from "../../images/free-icon-font-shopping-cart.png";
import Popularicon from "../../images/free-icon-font-chart-histogram.png";
import Topicon from "../../images/free-icon-font-users-alt.png";
import Feedicon from "../../images/free-icon-font-user-add.png";
import Contacticon from "../../images/free-icon-font-headphones.png";
import Burgericon from "../../images/free-icon-font-menu-burger.png";
import Settings from "../../images/gear.png";
import { Link, useLocation } from "react-router-dom";

const Asiide = styled.aside`
  height: auto;
  width: 150px;
  background-color: #2d0f43;
  overflow: hidden;
`;
const Div = styled.div`
  margin-top: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #1d0a2c;
  }
`;
const Text = styled(Link)`
  color: white; 
  margin-left: 22px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
`;
const BurgerMenu = styled.img`
  cursor: pointer;
  width: 30px;
  margin-left: 20px;
  margin-top: 20px;
`;
const Icons = styled.img`
  margin-left: 20px;
`;
const Settingsicon = styled.img`
  margin-left: 20px;
`;
const Div2 = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 85rem;
`;

const data = [
  {
    id: 1,
    icon: Homeicon,
    name: "Домой",
    path: "/home"
  },
  {
    id: 2,
    icon: Discovericon,
    name: "Товары",
    path: "/discover"
  },
  {
    id: 3,
    icon: Popularicon,
    name: "Популярное",
    path: "/popular-products"
  },
  {
    id: 4,
    icon: Topicon,
    name: "Топ продавцов",
    path: "/top-authors"
  },
  {
    id: 5,
    icon: Feedicon,
    name: "Стать продавцом",
    path: "/feed"
  },
  {
    id: 6,
    icon: Contacticon,
    name: "Связаться",
    path: "/contact"
  },
];

function Aside() {
  const { pathname } = useLocation();
  const [asideSize, setAsideSize] = useState(250);
  const [active, setActive] = useState(true);

  const resizeAside = () => {
    if (asideSize === 250) {
      setAsideSize(70);
    } else {
      setAsideSize(250);
    }
  };

  return (
    <Asiide
      style={{
        width: `${asideSize}px`,
        transition: "width 0.5s ease, height 0.5s ease",
      }}
    >
      <BurgerMenu src={Burgericon} onClick={resizeAside} />

      {data.map((data) => (
        <Div>
          <Icons src={data.icon}/>
          <Text to={data.path}>{data.name}</Text>
        </Div>
      ))}

      <Div2>
        <Settingsicon src={Settings} />
        <Text>Settings</Text>
      </Div2>
    </Asiide>
  );
}

export default Aside;
