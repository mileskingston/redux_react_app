import { createStore } from "redux";
import todos from '../data/todos';

export default function reducer(
  state = todos, action) {

    switch (action.type) {
      case "ADD_TODO": {
        return [
          ...state,
          {
            id: state.length + 1,
            text: action.payload
          }
        ]
      }
      case "REMOVE_TODO": {
        return [
          ...state,
          {
            id: action.payload.id,
            text: action.payload.text
          }
        ]
      }
    }

    return state
}

const store = createStore(reducer);
