import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config";
import firebase from "firebase/app";
import "firebase/firestore";
import styled from "styled-components";
import TavarUchunCard from "../Cards/Tavarlar";

import { Link, useLocation, useParams } from "react-router-dom";
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

const ProductButton = styled("button")`
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
const itemsTitle = [
  {
    id: 1,
    title: "All",
    path: "/",
    category: "all",
  },
  {
    id: 2,
    title: "iPhone",
    path: "/iphone",
    category: "iphone",
  },
  {
    id: 3,
    title: "iPad",
    path: "/ipad",
    category: "ipad",
  },
  {
    id: 4,
    title: "Macbook",
    path: "/macbook",
    category: "macbook",
  },
  {
    id: 5,
    title: "Airpods",
    path: "/airpods",
    category: "airpods",
  },
  {
    id: 6,
    title: "Watch",
    path: "/watch",
    category: "watch",
  },
  {
    id: 7,
    title: "EarPods",
    path: "/earpods",
    category: "earpods",
  },
  {
    id: 8,
    title: "Keyboard",
    path: "/keyboard",
    category: "keyboard",
  },
  {
    id: 9,
    title: "Accessirous",
    path: "/accessirous",
    category: "accessirous",
  },
];

const Section = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [firebaseTavarlar, setFirebaseTavarlar] = useState([]);
  const [showAllItems, setShowAllItems] = useState(false);
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
  const filterItems = (category) => {
    if (category === "all") {
      {firebaseTavarlar.map(filterItems)}
    } else {
      const filtered = firebaseTavarlar.filter(
        (item) => item.category === category
      );
      setFilteredItems(filtered);
      setShowAllItems(false);
    }
  };
  return (
    <section>
      <Appleinfo>
        <DiscoverApple>Discover / Apple</DiscoverApple>
        <InfoElectronic>Goods from Apple company</InfoElectronic>
      </Appleinfo>
      <ButtonContainer>
        {itemsTitle.map((d, i) => (
          <ProductButton key={i} onClick={() => filterItems(d.category)}>
            {d.title}
          </ProductButton>
        ))}
      </ButtonContainer>
      <TavarUchunCard data={filteredItems} />
    </section>
  );
};

export default Section;
