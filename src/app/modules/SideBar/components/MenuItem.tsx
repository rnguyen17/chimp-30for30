import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'app/utils/colors';

export const MenuItem = styled(Link)`
  display: block;
  margin: 15px 0;
  padding: 0 20px;
  list-style: none;
  color: ${Colors.SECONDARY};
  font-size: 18px;
`;
