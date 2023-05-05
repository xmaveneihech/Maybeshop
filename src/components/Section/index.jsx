import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config";
import ACard from "../Cards/Tavarlar";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
const collectionName = "maybe-shop";

const Appleinfo = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const DiscoverApple = styled("p")`
  margin-left: 30px;
  color: #637381;
  font-size: 20px;
`;
const InfoElectronic = styled("h1")`
  font-weight: 700;
  color: #212b36;
  margin-left: 30px;
  margin-top: -10px;
`;

const Allproducts = styled("button")`
  color: white;
  background-color: #212b36;
  border: none;
  border-radius: 25px;
  width: 60px;
  height: 30px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #161c24;
    transition: 0.3s;
  }
`;
const IphoneButton = styled("button")`
  color: #454f5b;
  background-color: #c4cdd5;
  border: none;
  border-radius: 25px;
  width: 60px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #919eab;
    transition: 0.3s;
  }
`;
const Macbookbtn = styled("button")`
  color: #454f5b;
  background-color: #c4cdd5;
  border: none;
  border-radius: 25px;
  width: 80px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #919eab;
    transition: 0.3s;
  }
`;
const Airpodsbtn = styled("button")`
  color: #454f5b;
  background-color: #c4cdd5;
  border: none;
  border-radius: 25px;
  width: 70px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #919eab;
    transition: 0.3s;
  }
`;
const Watchesbtn = styled("button")`
  color: #454f5b;
  background-color: #c4cdd5;
  border: none;
  border-radius: 25px;
  width: 60px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #919eab;
    transition: 0.3s;
  }
`;
const Ipadbtn = styled("button")`
  color: #454f5b;
  background-color: #c4cdd5;
  border: none;
  border-radius: 25px;
  width: 60px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #919eab;
    transition: 0.3s;
  }
`;
const Acessoriesbtn = styled("button")`
  color: #454f5b;
  background-color: #c4cdd5;
  border: none;
  border-radius: 25px;
  width: 100px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #919eab;
    transition: 0.3s;
  }
`;
const EarPodsbtn = styled("button")`
  color: #454f5b;
  background-color: #c4cdd5;
  border: none;
  border-radius: 25px;
  width: 70px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #919eab;
    transition: 0.3s;
  }
`;
const Keyboardbtn = styled("button")`
  color: #454f5b;
  background-color: #c4cdd5;
  border: none;
  border-radius: 25px;
  width: 90px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #919eab;
    transition: 0.3s;
  }
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Section = () => {
  const [firebaseTavarlar, setFirebaseTavarlar] = useState([]);
  const tavar = collection(db, collectionName);
  useEffect(() => {
    const getTavarlar = async () => {
      const data = await getDocs(tavar);
      setFirebaseTavarlar(
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
    <section>
      <Appleinfo>
      <DiscoverApple>Discover / Apple</DiscoverApple>
      <InfoElectronic>Goods from Apple company</InfoElectronic>
      </Appleinfo>
      <ButtonContainer>
        <Allproducts>All</Allproducts>
        <IphoneButton>iPhone</IphoneButton>
        <Ipadbtn>iPad</Ipadbtn>
        <Macbookbtn>Macbook</Macbookbtn>
        <Airpodsbtn>Airpods</Airpodsbtn>
        <Watchesbtn>Watch</Watchesbtn>
        <EarPodsbtn>EarPods</EarPodsbtn>
        <Keyboardbtn>Keyboard</Keyboardbtn>
        <Acessoriesbtn>Accessories</Acessoriesbtn>
      </ButtonContainer>
      <Routes>
        <Route path="/" element={<ACard data={firebaseTavarlar} />} />
      </Routes>
    </section>
  );
};

export default Section;
