import React from 'react';
import { connect } from 'react-redux';

import './Todos.css';

class Todos extends React.Component {
  render() {
    const {todos} = this.props;

    let mappedTodos;

    if(todos) {
      mappedTodos = todos.map(todos => <li className="todos__item" key={todos.id}>{todos.text}</li>);
    }

    return (
      <ul className="todos">
        {todos && mappedTodos}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(Todos);