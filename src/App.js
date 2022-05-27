import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is Home
      </Route>

      <Route exact path="/starred">
        This is Starred
      </Route>

      <Route>Error 404, Page not Found</Route>
    </Switch>
  );
}

export default App;
