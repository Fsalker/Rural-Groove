import React from 'react';
import {hashHistory, Router, IndexRoute, Route} from 'react-router';

import Welcome from './components/Welcome.js';
import Write from './components/Write.js';

const App = () => (
  <Router history={hashHistory} >
   <Route path="/" component={Main} >
    <IndexRoute component={Welcome} />
    <Route path="Write" component={Write} />
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