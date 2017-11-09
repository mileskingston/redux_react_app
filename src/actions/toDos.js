export function addToDo(text) {
  return {
    type: "ADD_TODO",
    payload: text
  }
}

export function removeToDo(id) {
  return {
    type: "REMOVE_TODO",
    payload: id
  }
}