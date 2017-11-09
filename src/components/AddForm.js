  import React from 'react';
  import { connect } from 'react-redux';
  import { addToDo } from '../actions/toDos';

  import './AddForm.css';

  let input;

  class AddForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isValid: true
      };

      this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e) {
      e.preventDefault();
      
      if (input.value) {
        this.props.addToDo(input.value);
        input.value = '';
      } else {
        this.setState({ isValid: false });        
      }
    }
    
    render() {
      const {state, props} = this;

      return (
        <form id="addForm" className="add-form" onSubmit={this.addTodo} noValidate>
          <input 
            ref={node => {input = node}} 
            className="add-form__input input" 
            type="text"
            minLength="3"
            onFocus={() => this.setState({ isValid: true })}
            required
          />
          <button className="add-form__btn btn" type="submit">Add</button>
          {
            !state.isValid &&
            <p className="add-form__error error">This field is required</p>
          }
        </form>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      todos: state
    }
  }

  export default connect(mapStateToProps, {addToDo})(AddForm);