import React from "react";
import Avatar from "react-avatar";
import styled from "styled-components";

const Container = styled.div``;
const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
const ContImg = styled.div`
  width: 18rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Img = styled.img`
  width: 356px;
`;
const ACardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  width: 20rem;
  height: 22rem;
`;
const CardImg = styled("img")`
  height: 15rem;
  width: 15rem;
  border-radius: 20px;
`;
const CardBody = styled("div")`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;
const SecondContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;
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
                <Avatar
                  round={true}
                  size={29}
                  src={d.img}
                  style={{ margin: "1rem" }}
                />
                <SecondContainer>
                  <div>
                    <p>{d.name}</p>
                    <p>Sub Nazvaniya</p>
                  </div>
                  <div>
                    <div>
                      <p>{d.price}</p>
                      <p>$19underline</p>
                      <p>15 sales</p>
                      <p>5.0(10)</p>
                    </div>
                    <img src="" alt="" />
                  </div>
                </SecondContainer>
              </CardBody>
            </ACardContainer>
          ))}
        </SectionContainer>
      )}
      {data.length == 0 && <h1>Loading</h1>}
    </Container>
  );
};

export default TavarUchunCard;
