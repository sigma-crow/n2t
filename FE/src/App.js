import React from 'react';
import * as Pages from '@pages/index';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SubmitAnswer from '@hooks/SubmitAnswer';
import './App.css';
// import StickyFooter from './components/comman/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route exact path='/' component={Pages.MainPage} />
          <Route exact path='/edit' component={Pages.EditorPage} />
          <Route exact path='/note' component={Pages.MyNotePage} />
          <SubmitAnswer>
            <Route exact path='/test' component={Pages.TestPage} />
            <Route exact path='/result' component={Pages.TestResultPage} />
          </SubmitAnswer>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
