import React, { useState } from "react";
import styled from "styled-components";
import Homeicon from "../../images/house.png";
import Discovericon from "../../images/compass.png";
import Popularicon from "../../images/box.png";
import Topicon from "../../images/user-group.png";
import Feedicon from "../../images/feed-1.png";
import Contacticon from "../../images/headset.png";
import Burgericon from "../../images/free-icon-font-menu-burger.png";
import Settings from "../../images/gear.png";
import { Link, useLocation } from "react-router-dom";

const Asiide = styled.aside`
  height: 100%;
  width: 150px;
  background-color: #f9fafb;
  overflow: hidden;
`;
const Div = styled.div`
  margin-top: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #ffd500;
  }
`;
const Text = styled(Link)`
  color: #637381;
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
    name: "Home",
    path: "/home"
  },
  {
    id: 2,
    icon: Discovericon,
    name: "Discover",
    path: "/discover"
  },
  {
    id: 3,
    icon: Popularicon,
    name: "Popular Products",
    path: "/popular-products"
  },
  {
    id: 4,
    icon: Topicon,
    name: "Top Authors",
    path: "/top-authors"
  },
  {
    id: 5,
    icon: Feedicon,
    name: "Feed",
    path: "/feed"
  },
  {
    id: 6,
    icon: Contacticon,
    name: "Contact",
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
