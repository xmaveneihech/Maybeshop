import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { collection, getDocs } from "firebase/firestore";
import "firebase/firestore";
import Avattar from "../images/Image.png";
import Avatar from "react-avatar";
import styled from "styled-components";
import { db } from "../config";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Section = styled("section")`
  margin-left: 20px;
  margin-top: -20px;
`;

const Tovars = styled("h1")`
  font-size: 40px;
  margin-left: 420px;
  font-weight: 700;
`;

const Swiperr = styled(Swiper)`
  width: 70rem;
  margin-top: -50px;
`;
const ContImg = styled.div`
  width: 14rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const ACardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1rem;
  margin-top: 3rem;
  width: 18rem;
  height: 20rem;
  cursor: pointer;
`;
const CardImg = styled("img")`
  height: 10rem;
  width: 10rem;
  border-radius: 20px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
const CardBody = styled("div")`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;
const SecondContainer = styled("div")`
  display: block;
  flex-direction: column;
  margin-right: 6rem;
  margin-top: -3rem;
`;
const Price = styled("p")`
  color: #ffd500;
  font-weight: 700;
  margin-left: 3.5rem;
`;
const Ava = styled(Avatar)`
  margin-left: 2.8rem;
  margin-top: -1rem;
`;
const CardText = styled("div")`
  width: 13rem;
  margin-left: 3.5rem;
`;
const Tovarname = styled("p")`
  font-weight: 600;
`;
const Subname = styled("p")`
  margin-top: -1rem;
  color: #637381;
`;
const Slider = () => {
  const [data, setData] = useState([]);
  const tavar = collection(db, "maybe-shop");

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
  console.log(data);
  return (
    <Section>
      <Tovars>Наши Товары</Tovars>
      <Swiperr
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => (
          <SwiperSlide>
            <ACardContainer>
              <ContImg>
                <CardImg src={item.img} />
              </ContImg>
              <CardBody>
                <Ava round={true} size={30} src={Avattar} />
                <SecondContainer>
                  <CardText>
                    <Tovarname>{item.name}</Tovarname>
                    <Subname>Maybe Shop</Subname>
                  </CardText>
                  <Price>${item.price}</Price>
                </SecondContainer>
              </CardBody>
            </ACardContainer>
          </SwiperSlide>
        ))}
      </Swiperr>
    </Section>
  );
};

export default Slider;
