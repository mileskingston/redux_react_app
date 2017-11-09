import React from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddForm />
        <Todos />
      </div>
    );
  }
}

export default App;
