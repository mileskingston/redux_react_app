import React from 'react';
import { connect } from 'react-redux';
import { fetchToDos } from './actions/toDos';

import './Todos.css';

class Todos extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchToDos());
  }

  render() {
    const {todos} = this.props;

    let mappedTodos;

    if(todos.state) {
      mappedTodos = todos.state.map(todos => <li className="todos__item" key={todos.id}>{todos.text}</li>);
    }

    return (
      <ul className="todos">
        {todos.state && mappedTodos}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(Todos)