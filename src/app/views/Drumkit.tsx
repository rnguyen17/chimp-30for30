import * as React from 'react';
import styled from 'styled-components';

const IntroductionWrapper = styled.div`
  grid-area: body;
  width: 100%;
`;

export const Drumkit = (props: any) => (
  <IntroductionWrapper {...props}>This is my Drumkit view</IntroductionWrapper>
);
