import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './MainPage';
import { GlobalStyles } from './styles';
import { ContextProvider } from './components/contextData/DataContext';
import Store from './components/store/Store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <ContextProvider>
          <GlobalStyles />
          <div className="App">
            <MainPage />
          </div>
        </ContextProvider>
      </Provider>
    </>
  );
}

export default App;
