import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 16px;
`;

const CardComponent = ({ title, text }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </Card>
  );
};

export default CardComponent;
