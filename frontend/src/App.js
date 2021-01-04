import React from 'react';
import Home from './pages/Home';
import Team from './pages/Team';
import NotFound from './pages/404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            <Route default component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
