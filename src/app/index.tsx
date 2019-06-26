import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import { Home } from './views';
import { Header } from './components/Header';
import { Logo } from './components/Logo';

class App extends React.Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Header>
          <Logo size={30} />
        </Header>
        <Route path="/(home)?" exact component={Home} />
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
