import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import styled from 'styled-components';
import './index.scss';
import { Home } from './views';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
// import { Routes } from './routes/Routes';

// const Main = styled.main`
//   display: grid;
//   grid-template-columns: 300px auto;
//   grid-template-rows: 60px auto;
//   grid-template-areas:
//     'header header'
//     'side content';
//   height: 100vh;
// `;

// const Content = styled.section`
//   grid-area: content;
// `;

// const Header = styled.header`
//   background: #f00;
//   grid-area: header;
// `;

// const SideBar = styled.aside`
//   background: #eee;
//   grid-area: side;
// `;

// const renderHeader = (location: string): boolean => {
//   const exclusionPaths = ['/', '/home'];

//   return !exclusionPaths.includes(location);
// };

class App extends React.Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);
  }
  render() {
    // const { location } = this.props;
    return (
      <>
        {/* {renderHeader(location.pathname) && ( */}
        <Header>
          <Logo />
        </Header>
        {/* )} */}
        <Route path="/(home)?" exact component={Home} />
        {/* <Main>
          <Header />
          <SideBar>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </SideBar>
          <Content>
            <Routes />
          </Content>
        </Main> */}
      </>
    );
  }
}

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById('root')
);
