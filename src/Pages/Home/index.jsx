import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import "firebase/firestore";
import Fon from "../../images/macbook2023.jpg";
import { db } from "../../config";
// import Swiper from "../../components/swiper"
import Slider from "../../components/Slider";
import AppleProduct from "../../images/8edef17b-e87b-4ac4-94e6-4bb822b94817.png";

const Section = styled("section")`
  height: auto;
`;
const BckgFon = styled("img")`
  margin-left: 120px;
  margin-top: 20px;
  width: 600px;
  height: 500px;
  object-fit: cover;
`;
const Container1 = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ContText1 = styled("h1")`
  display: flex;
  flex-direction: column;
  font-size: 50px;
`;
const ContText2 = styled("h2")`
  font-size: 25px;
  position: relative;
  top: -15px;
`;
const PText = styled("p")`
  color: #22B07D;
  position: relative;
  top: 35px;
  font-size: 35px;
`;
const BuyButton = styled("button")`
  width: 150px;
  height: 40px;
  position: relative;
  top: 380px;
  left: -1060px;
  border-radius: 20px;
  border: none;
  background-color: #22B07D;
  font-size: 20px;
  outline: none;
  font-weight: 600;
  cursor: pointer;
`;
const Container2 = styled("div")`
  margin-left: 50px;
  width: 800px;
`;
const AppleProd = styled("img")`
  width: 1200px;
  margin-top: -50px;
  margin-left: 30px;
`;
const Container3 = styled("div")`
  display: flex;
`;
const H1Cont3 = styled("h1")`
  font-size: 40px;
  margin-left: 20px;
`;
const Images = styled("img")`
  height: 8rem;
  width: 8rem;
  border-radius: 20px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  `;
const ACardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 8px 0px black;
  padding: 1rem;
  margin-top: 8rem;
  width: 12rem;
  height: 12rem;
  cursor: pointer;
`;
const ContImg = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Names = styled("h1")`
  font-weight: 600;
`;

const Home = () => {
  const [data, setData] = useState([]);
  const tavar = collection(db, "img");

  useEffect(() => {
    const getTavarlar = async () => {
      const data = await getDocs(tavar);
      setData(
        data.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    };
    getTavarlar();
  }, []);

  return (
    <Section>
      <Container1>
        <ContText1>
          <PText>Новый</PText>
          MacBook Pro <br /> 16-inch (2023)
          <br />
          <ContText2>
            Новый уровень <br />
            производительности
          </ContText2>
        </ContText1>
        <BckgFon src={Fon} alt="" />
        <BuyButton>Купить</BuyButton>
      </Container1>
      <Container2>
        <Slider />
      </Container2>
      <AppleProd src={AppleProduct} />
    </Section>
  );
};

export default Home;
