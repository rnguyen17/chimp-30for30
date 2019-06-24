import * as React from 'react';
import styled from 'styled-components';
const logo = require('../assets/icons/logo.svg');

const HomeWrapper = styled.main`
  height: 100vh;
  width: 100%;
  // background: #2d2746;
  // background: #6b15ab;
  background-image: linear-gradient(to right, #6b15ab, #712db1, #773fb7, #7d4fbd, #845ec2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-family: 'Lato', Helvetica;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  color: #fff;
  font-size: 30px;
  font-style: italic;
  font-family: 'Lato', Helvetica;
  margin-bottom: 20px;
`;

export const Home = () => {
  return (
    <HomeWrapper>
      <Title>SingleSPA 30 for 30</Title>
      <SubTitle>
        Code examples in React, Angular, Vue, and plain JavaScript, inspired by Wes Bos' JS 30 for
        30 coding projects
      </SubTitle>
      <img src={logo} />
    </HomeWrapper>
  );
};
