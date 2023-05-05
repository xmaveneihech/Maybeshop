import React from "react";
import Avatar from "react-avatar";
import styled from "styled-components";
import Avattar from "../../images/Image.png";
import Preloader from "../Preloader/preloader";

const Container = styled.div``;
const SectionContainer = styled.div`
  display: grid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  grid-template-columns: repeat(12, 1fr);
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
  width: 20rem;
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
`
const Subname = styled("p")`
    margin-top: -1rem;
    color: #637381;
`
const TavarUchunCard = ({ data }) => {
  console.log(data);

  return (
    <Container>
      {data.length !== 0 && (
        <SectionContainer>
          {data.map((d, index) => (
            <ACardContainer>
              <ContImg>
                <CardImg src={d.img} />
              </ContImg>
              <CardBody>
                <Ava
                  round={true}
                  size={30}
                  src={Avattar}
                />
                <SecondContainer>
                  <CardText>
                    <Tovarname>{d.name}</Tovarname>
                    <Subname>Maybe Shop</Subname>
                  </CardText>
                      <Price>${d.price}</Price>
                </SecondContainer>
              </CardBody>
            </ACardContainer>
          ))}
        </SectionContainer>
      )}
      {data.length == 0 && <Preloader/>}
    </Container>
  );
};

export default TavarUchunCard;
