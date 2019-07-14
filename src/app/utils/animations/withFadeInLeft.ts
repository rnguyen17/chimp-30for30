import * as React from 'react';
import styled from 'styled-components';

export interface FadeInLeftProps {
  timeout?: number;
  delay?: number;
}

export const withFadeInLeft = (
  Component: keyof JSX.IntrinsicElements | React.ComponentType<any>
) => styled(Component)`
  &.fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  &.fade-enter-active {
    opacity: 1;
    transition: all ${({ timeout = 150 }) => timeout}ms ease-out ${({ delay = 150 }) => delay}ms;
    transform: translateX(0);
  }

  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.fade-exit-active {
    opacity: 0;
    transition: all ${({ timeout = 150 }) => timeout}ms ease-out;
    transform: translateX(-100%);
  }
`;
