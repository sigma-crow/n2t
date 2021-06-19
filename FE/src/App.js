import React from 'react';
import * as Pages from '@pages/index';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SubmitAnswer from '@hooks/SubmitAnswer';
import storageHandler from '@utils/localStorage';
import './App.css';
// import StickyFooter from './components/comman/Footer';

const moveTokenCookieToLocalStorage = () => {
  try {
    const token = document.cookie
      .split(';')
      .find((cookie) => cookie.includes('token='))
      .split('=')[1];
    deleteCookie('token');
    storageHandler.set(token);
  } catch (e) {
    return undefined;
  }
};

const deleteCookie = function (name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
};

function App() {
  moveTokenCookieToLocalStorage();
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Pages.HomePage} />
          <Route
            exact
            path='/searchShared'
            component={Pages.searchSharedPage}
          />
          <Route exact path='/' component={Pages.HomePage} />
          <Route exact path='/edit' component={Pages.EditorPage} />
          <Route exact path='/note' component={Pages.MyNotePage} />
          <Route exact path='/find' component={Pages.FindIdPage} />
          <Route exact path='/login' component={Pages.LogInPage} />
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
