import store from "../Store";

function Removetodo(id) {
  const todo = store.getState().todo;
  // console.log(todo);
  const filteredTodo = todo.filter((ele) => ele.id !== id);
  store.dispatch({
    type: "REMOVE_TODO",
    payload: filteredTodo
  });
}

export default Removetodo;
