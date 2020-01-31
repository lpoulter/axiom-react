import React from 'react';
import ReactDOM from 'react-dom';
import { Paragraph, Heading, Small } from '@brandwatch/axiom-components';

import './App.css';

function App() {
  return (
    <div className="App ax-theme--day">
      <Heading textSize="display2">Axiom Playground</Heading>
      <Paragraph textColor="subtle">
        <Small>Add Axiom here...</Small>
      </Paragraph>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
