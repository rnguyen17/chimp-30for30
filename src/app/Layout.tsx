import { css } from 'styled-components';

export const Layout = {
  Main: css`
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template-columns: 260px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
      'header header'
      'aside body';
  `,
  Header: css`
    width: 100%;
    grid-area: header;
  `,
  SideBar: css`
    width: 100%;
    grid-area: aside;
  `,
  Content: css`
    width: 100%;
    grid-area: body;
  `,
  ContentWidth: css`
    grid-row: 2;
    grid-column: 1 / 3;
  `,
};
