import React from 'react';
import {hashHistory, Router, IndexRoute, Route} from 'react-router';

import Page2 from './components/Page2.js';

const App = () => (
  <Router history={hashHistory} >
   <Route path="/" component={Main} >
    <IndexRoute component={Page2} />
   </Route>
  </Router>
)

class Main extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
