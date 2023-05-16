import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config";
import styled from "styled-components";
import Iphonecard from "../Cards/iphonecards";
import { Link } from "react-router-dom";
const collectionName = "maybe-shop";

const Appleinfo = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
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

const ProductButton = styled(Link)`
  color: white;
  background-color: #525960;
  text-align: center;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 1.4rem;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    background-color: #161c24;
    transition: 0.3s;
  }
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Section = () => {
  const itemsTitle = [
    {
      title: "All",
    },
    {
      title: "iPhone",
    },
    {
      title: "iPad",
    },
    {
      title: "Macbook",
    },
    {
      title: "Airpods",
    },
    {
      title: "Watch",
    },
    {
      title: "EarPods",
    },
    {
      title: "Keyboard",
    },
    {
      title: "Accessirous",
    },
  ];
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
  console.log(firebaseTavarlar);
  return (
    <section>
      <Appleinfo>
        <DiscoverApple>Discover / Apple / iPhone</DiscoverApple>
        <InfoElectronic>Goods from Apple company</InfoElectronic>
      </Appleinfo>
      <ButtonContainer>
        {itemsTitle.map((d) => (
        <ProductButton>{d.title}</ProductButton>
        ))}
      </ButtonContainer>
      <Iphonecard data={firebaseTavarlar} />
    </section>
  );
};

export default Section;
