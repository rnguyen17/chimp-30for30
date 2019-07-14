import * as React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { Link } from 'react-router-dom';
import { Colors } from 'app/utils/colors';

const HomeWrapper = styled.main`
  grid-row: 2;
  grid-column: 1 / 3;
  background-image: linear-gradient(to right, #3b1e79, #461e86, #511d93, #5e1a9f, #6b15ab);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // &.fade-enter {
  //   opacity: 0;
  // }

  // &.fade-enter-active {
  //   opacity: 1;
  //   transition: opacity 0.3s ease-out 0.3s;
  // }

  // &.fade-exit {
  //   opacity: 1;
  // }

  // &.fade-exit-active {
  //   opacity: 0;
  //   transition: opacity 0.3s ease-out;
  // }
`;

const BeginButton = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin-top: 70px;
  font-size: 24px;
  border: 2px solid ${Colors.SECONDARY};
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

export class Home extends React.Component {
  render() {
    console.log('home rendered');
    return (
      <HomeWrapper {...this.props}>
        <Title>SingleSPA 30 for 30</Title>
        <SubTitle>One framework is not enough.</SubTitle>
        <SubTitle>JavaScript 30 for 30 is not enough.</SubTitle>
        <BeginButton to="/demos/introduction">View Demo</BeginButton>
      </HomeWrapper>
    );
  }
}
