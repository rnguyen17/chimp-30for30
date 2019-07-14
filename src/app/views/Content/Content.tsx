import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withFadeInOut } from 'app/utils/animations';
import { Home, Introduction, Drumkit } from 'app/views';

class ContentWithAnimation extends React.Component<RouteComponentProps> {
  render() {
    const { location } = this.props;
    return (
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} unmountOnExit classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route path="/" exact component={withFadeInOut(Home)} />
            <Route path="/demos/introduction" exact component={withFadeInOut(Introduction)} />
            <Route path="/demos/drumkit" exact component={withFadeInOut(Drumkit)} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
export const Content = withRouter(ContentWithAnimation);
