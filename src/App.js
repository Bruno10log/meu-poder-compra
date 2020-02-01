import React from 'react';
import Main from './components/Main';
import GlobalStyle from './styles/global';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';

function App() {

  
  return (
    <>
      <I18nextProvider i18n={i18n}>
          <Header/>
          <GlobalStyle/>
          <Main/>
      </I18nextProvider>
    </>
  );
}

export default App;