const initialState = {
  todo: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return { todo: [...state.todo, payload] };

    case "REMOVE_TODO":
      return { todo: payload };

    case "EDIT_TODO":
      return { todo: payload };

    default:
      return state;
  }
};

export default reducer;
