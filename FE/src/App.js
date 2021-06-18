import React from 'react';
import * as Pages from '@pages/index';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import StickyFooter from './components/comman/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Pages.MainPage} />
          <Route exact path='/test' component={Pages.TestPage} />
          <Route
            exact
            path='/searchShared'
            component={Pages.searchSharedPage}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
