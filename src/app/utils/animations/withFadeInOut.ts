import * as React from 'react';
import styled from 'styled-components';

export interface FadeInOutProps {
  timeout?: number;
  delay?: number;
}

export const withFadeInOut = (
  Component: keyof JSX.IntrinsicElements | React.ComponentType<any>
) => styled(Component)`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: all ${({ timeout = 150 }) => timeout}ms ease-out ${({ delay = 150 }) => delay}ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: all ${({ timeout = 150 }) => timeout}ms ease-out;
  }
`;
