import * as React from 'react';
import styled from 'styled-components';
import { Layout } from 'app/Layout';
import { Logo } from 'app/components/Logo';

const HeaderWrapper = styled.header`
  ${Layout.Header};
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-image: linear-gradient(to right, #3b1e79, #461e86, #511d93, #5e1a9f, #6b15ab);
`;

export const Header = () => (
  <HeaderWrapper>
    <Logo size={30} />
  </HeaderWrapper>
);
