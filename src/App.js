import React from 'react';
import { Provider } from 'mobx-react';
import BirdStore from './stores/BirdStore';
import Birds from './components/Birds'; 
import './App.css';

function App() {
  return (
    <Provider BirdStore={ BirdStore }>
      <Birds />
    </Provider>
  );
}

export default App;
