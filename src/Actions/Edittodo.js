import store from "../Store";

function Edittodo(id, data) {
  const todo = store.getState().todo;
  const index = todo.findIndex((obj) => obj.id === id);
  todo[index].data = data;
  store.dispatch({ type: "EDIT_TODO", payload: todo });
}

export default Edittodo;
