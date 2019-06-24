import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 50px;
  // background-image: linear-gradient(to right, #845ec2, #906dc6, #9c7dc9, #a88ccd, #b39cd0);
  background-image: linear-gradient(to right, #6b15ab, #712db1, #773fb7, #7d4fbd, #845ec2);
`;

export const Header: React.FC = ({ children }) => <HeaderWrapper>{children}</HeaderWrapper>;
