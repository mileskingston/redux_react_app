import React from 'react';
import { connect } from 'react-redux';
import { addToDos } from './actions/toDos';

import './AddForm.css';

let input;

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addToDos(input.value);
    input.value = '';
  }
  
  render() {
    return (
      <form className="add-form" onSubmit={this.addTodo}>
        <input ref={node => {input = node}} className="add-form__input input" type="text" />
        <button className="add-form__btn btn" type="submit">Add</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, {addToDos})(AddForm);