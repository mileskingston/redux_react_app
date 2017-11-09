// import todos from '../data/todos';

// function fetchToDos() {
//   return {
//     type: "FETCH_TODOS",
//     payload: { todos }
//   }
// }

export function addToDos(text) {
  return {
    type: "ADD_TODO",
    payload: text
  }
}

export function removeToDos(id, text) {
  return {
    type: "REMOVE_TODO",
    payload: {
      id
    }
  }
}