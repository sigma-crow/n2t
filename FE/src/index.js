import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from '@styles/theme';
import {GlobalStyle} from '@styles/GlobalStyle';
import {Helmet} from 'react-helmet';
import App from './App';

ReactDOM.render(
  <>
    <Helmet>
      <title>N2T</title>
      <meta name='description' content='필기에서 문제까지 변환 서비스' />
    </Helmet>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </>,

  document.getElementById('app'),
);
