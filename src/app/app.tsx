import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Header, SideNav, Content } from 'app/views';
import { Layout } from './Layout';
import './index.scss';

const GlobalStyle = createGlobalStyle`
  main {
    ${Layout.Main}
  }
`;

class App extends React.Component<RouteComponentProps> {
  shouldShowSideNav(path: string) {
    return path !== '/';
  }
  render() {
    const { location } = this.props;
    return (
      <>
        <GlobalStyle />
        <Header />
        <SideNav showSideNav={this.shouldShowSideNav(location.pathname)} />
        <Content />
      </>
    );
  }
}

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <BrowserRouter>
    <AppWithRouter />
  </BrowserRouter>,
  document.getElementById('root')
);
