import todos from '../data/todos';

export function fetchToDos() {
  return {
    type: "FETCH_TODOS",
    payload: todos
  }
}

export function addToDo(id, text) {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text
    }
  }
}