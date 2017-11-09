import { createStore } from "redux";
import todos from '../data/todos';

export default function reducer(
  state = todos, action) {

    switch (action.type) {
      case "ADD_TODO": {
        return [
          ...state,
          {
            id: state.length,
            text: action.payload
          }
        ]
      }
      case "REMOVE_TODO": {
        const todos = state.filter(todo => todo.id !== action.payload);
        return todos;
      }
    }

    return state
}

const store = createStore(reducer);
