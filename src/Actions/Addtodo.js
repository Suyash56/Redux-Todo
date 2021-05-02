import store from "../Store";

function Addtodo(id, data) {
  store.dispatch({
    type: "ADD_TODO",
    payload: {
      id,
      data
    }
  });
}

export default Addtodo;
