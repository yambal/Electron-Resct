import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  color: red;
`

const App: React.FC = () => {
  return (
    <div className="App">
      <Test>Hello Styled Components</Test>
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
    </div>
  );
}

export default App;
