import React from "react";
import CardComponent from "./CardComponent";

const cardData = [
  {
    id: 1,
    title: "Карточка 1",
    text: "Текст первой карточки",
  },
  {
    id: 2,
    title: "Карточка 2",
    text: "Текст второй карточки",
  },
  {
    id: 3,
    title: "Карточка 3",
    text: "Текст третьей карточки",
  },
];

const CardList = () => {
  return (
    <div>
      {cardData.map((card) => (
        <CardComponent key={card.id} title={card.title} text={card.text} />
      ))}
    </div>
  );
};

export default CardList;
