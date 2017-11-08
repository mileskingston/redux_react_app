import { createStore } from "redux";

export default function reducer(
  state = [], action) {

    switch (action.type) {
      case "FETCH_TODOS": {
        return {
          ...state,
          state: action.payload
        }
      }
      case "ADD_TODO": {
        return {
          ...state,
          id: action.payload.id,
          text: action.payload.text       
        }
      }
    }

    return state
}

const store = createStore(reducer);
