import React from 'react';
import { connect } from 'react-redux';
import { fetchToDos } from './actions/toDos';

import './App.css';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchToDos());
  }

  render() {
    const {todos} = this.props;

    let mappedTodos;

    if(todos.state) {
      mappedTodos = todos.state.map(todos => <li key={todos.id}>{todos.text}</li>);
    }

    return (
      <div className="App">
         <ul>{todos.state && mappedTodos}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(App)
