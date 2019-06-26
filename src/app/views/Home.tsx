import * as React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.main`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to right, #3b1e79, #461e86, #511d93, #5e1a9f, #6b15ab);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BeginButton = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin-top: 70px;
  font-size: 24px;
  border: 2px solid #00c9a7;
  background: transparent;
  color: #00c9a7;
  border-radius: 10px;
  width: 320px;
  padding: 10px 15px;
  transition: all 0.15s ease-out;

  &:hover {
    background: #00c9a7;
    color: #fff;
  }
`;

export const Home = () => {
  return (
    <HomeWrapper>
      <Title>SingleSPA 30 for 30</Title>
      <SubTitle>One framework is not enough.</SubTitle>
      <SubTitle>JavaScript 30 for 30 is not enough.</SubTitle>
      <BeginButton to="/docs">View Demo</BeginButton>
    </HomeWrapper>
  );
};
