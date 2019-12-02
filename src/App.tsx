import React from 'react';
import store from './redux/store'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme';
import Counter from './containers/Counter';

const ThemingSample = styled.div`
  color: ${props => props.theme.testColor}
`

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <ThemingSample>theme</ThemingSample>
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Counter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
