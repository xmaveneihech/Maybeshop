import React from "react";

const Categories = (props) => {
  const categories = [
    {
      key: "all",
      name: "All",
    },
    {
      key: "iphone",
      name: "Iphone",
    },
    {
      key: "ipad",
      name: "iPad",
    },
    {
      key: "macbook",
      name: "Macbook",
    },
    {
      key: "airpods",
      name: "Airpods",
    },
    {
      key: "watch",
      name: "Watch",
    },
    {
      key: "earpods",
      name: "EarPods",
    },
    {
      key: "keyboard",
      name: "Keyboard",
    },
    {
      key: "accessories",
      name: "Accessories",
    },
  ];
  return (
    <div className="categories">
      {categories.map((d, index) => (
        <div key={index} onClick={() => props.chooseCategory(d.key)}>
          {d.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
