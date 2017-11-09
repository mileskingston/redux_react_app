import React from 'react';
import { connect } from 'react-redux';
import { removeToDo } from '../actions/toDos';

import './Todos.css';

class Todos extends React.Component {
  removeToDo(todoId) {
    this.props.removeToDo(todoId);
  }

  render() {
    const {todos} = this.props;

    let mappedTodos;

    if (todos) {
      mappedTodos = todos.map(
        todos => 
        <li className="todos__item" key={todos.id}>
          {todos.text}
          <button onClick={() => this.removeToDo(todos.id)} className="todos__item__btn btn"></button>
        </li>
      );
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

export default connect(mapStateToProps, {removeToDo})(Todos);