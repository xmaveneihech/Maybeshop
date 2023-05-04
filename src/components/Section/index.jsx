import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config";
import ACard from "../Cards/Tavarlar";
import { Routes, Route } from "react-router-dom";
const collectionName = "maybe-shop";
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
      <Routes>
        <Route path="/" element={<ACard data={firebaseTavarlar} />} />
      </Routes>
    </section>
  );
};

export default Section;
