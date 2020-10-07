import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text
  }
}

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
  }
}

const store = createStore(reducer);

export default store;