import React from "react";
import Section from "../../components/Section/index";
import { useParams } from "react-router-dom";

const Discover = () => {
  const { type } = useParams();
  console.log(type);
  return (
    <div>
      <Section />
    </div>
  );
};

export default Discover;
