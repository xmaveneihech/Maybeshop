import React, { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  max-height: ${props => (props.expanded ? 'none' : '200px')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #0077cc;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;

  &:hover {
    background-color: #005fa3;
  }
`;

function ExpandableSection({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <SectionContainer expanded={expanded}>
      <Title>{title}</Title>
      {children}
      <Button onClick={toggleExpanded}>
        {expanded ? 'Скрыть' : 'Узнать больше'}
      </Button>
    </SectionContainer>
  );
}

export default ExpandableSection;
