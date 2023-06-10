import React from 'react';
import styled, { keyframes } from 'styled-components';

// Создаем анимацию
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Создаем стилизованный компонент для прелоадера
const Loader = styled.div`
  border-top: 4px solid #22B07D;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 0.6s linear infinite;
`;

// Компонент-обертка для позиционирования прелоадера
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Preloader = () => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default Preloader;
