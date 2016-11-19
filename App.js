import React from 'react';
import {hashHistory, Router, IndexRoute, Route} from 'react-router';

const App = () => (
  <Router history={hashHistory} >
   <Route path="/" component={Main} >
    <IndexRoute component={Welcome} />
    <Route path="..." component={Customize} />
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
