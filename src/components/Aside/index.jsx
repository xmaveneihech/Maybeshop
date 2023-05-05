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

const Asiide = styled.aside`

  height: 100%;
  width: 150px;
  background-color: #f9fafb;
  overflow: hidden;
`;
const Div = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #ffd500;
  }
`;
const Text = styled.p`
  color: #637381;
  margin-left: 22px;
  font-weight: 600;
  white-space: nowrap;
`;
const BurgerMenu = styled.img`
  cursor: pointer;
  width: 30px;
  margin-left: 20px;
  margin-top: 20px;
`;
const Home = styled.img`
  margin-left: 20px;
`;
const Discover = styled.img`
  margin-left: 20px;
`;
const Popular = styled.img`
  margin-left: 20px;
`;
const Top = styled.img`
  margin-left: 20px;
`;
const Feed = styled.img`
  margin-left: 20px;
`;
const Contact = styled.img`
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

function Aside() {
  const [asideSize, setAsideSize] = useState(250);

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
      <Div>
        <Home src={Homeicon} />
        <Text>Home</Text>
      </Div>
      <Div>
        <Discover src={Discovericon} />
        <Text>Discover</Text>
      </Div>
      <Div>
        <Popular src={Popularicon} />
        <Text>Popular Products</Text>
      </Div>
      <Div>
        <Top src={Topicon} />
        <Text>Top Authors</Text>
      </Div>
      <Div>
        <Feed src={Feedicon} />
        <Text>Feed</Text>
      </Div>
      <Div>
        <Contact src={Contacticon} />
        <Text>Contact</Text>
      </Div>
      <Div2>
        <Settingsicon src={Settings} />
        <Text>Settings</Text>
      </Div2>
    </Asiide>
  );
}

export default Aside;
