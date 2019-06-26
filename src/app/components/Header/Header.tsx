import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 50px;
  background-image: linear-gradient(to right, #3b1e79, #461e86, #511d93, #5e1a9f, #6b15ab);
`;

export const Header: React.FC = ({ children }) => <HeaderWrapper>{children}</HeaderWrapper>;
