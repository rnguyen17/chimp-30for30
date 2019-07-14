import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface LogoProps {
  color?: string;
  size?: number;
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
`;

const Title = styled(Link)<LogoProps>`
  display: inline-block;
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: ${({ size }) => `${size * 0.75}px`};
  font-family: 'Pacifico';
`;

export const Logo: React.FC<LogoProps> = ({ color = '#fff', size = 20 }) => (
  <LogoWrapper>
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 82.413 82.412"
      fill={color}
    >
      <g>
        <g>
          <path
            d="M71.215,40.861L82.008,22.16L69.853,1.102H45.539l-11,19.049H12.149L0,41.207l12.156,21.056h22.793l10.997,19.048h24.312
        l12.155-21.053L71.215,40.861z M47.855,5.118h19.678l9.839,17.039l-9.839,17.037H47.855l-9.836-17.037L47.855,5.118z
        M34.153,58.245H14.476L4.639,41.207l9.837-17.04h19.678l9.835,17.04L34.153,58.245z M67.937,77.293H48.259l-9.835-17.035
        l9.835-17.043h19.678l9.835,17.043L67.937,77.293z"
          />
          <polygon points="16.208,27.053 8.112,41.176 15.776,55.717 18.444,54.31 11.546,41.234 18.818,28.548 		" />
          <polygon points="71.914,22.773 74.446,21.147 65.298,6.899 49.581,6.899 49.581,9.909 63.652,9.909 		" />
          <polygon points="67.139,46.018 64.487,47.438 71.448,60.422 64.515,72.242 67.109,73.771 74.904,60.487 		" />
        </g>
      </g>
    </svg>
    <Title to="/" size={size} color={color}>
      Single-SPA TFT
    </Title>
  </LogoWrapper>
);
