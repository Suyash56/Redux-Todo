import "./styles.css";
import { useState } from "react";
import { makeStyles, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { v4 } from "uuid";

import Addtodo from "./Actions/Addtodo";
import Removetodo from "./Actions/Removetodo";
import Edittodo from "./Actions/Edittodo";

const style = makeStyles((theme) => ({
  text: {
    width: 500
  },
  btn: {
    marginTop: 20
  },
  todo_data: {
    width: 300,
    height: 30
  },
  todo_btn: {
    marginTop: 8,
    padding: 20
  },
  conf_btn: {
    marginTop: 8,
    padding: 15
  }
}));

function App(props) {
  const classes = style();
  const [data, setData] = useState("");
  const [toggel, setToggel] = useState(true);
  const [editedId, setEditedId] = useState(0);

  const handleSubmit = () => {
    const uniqId = v4();
    Addtodo(uniqId, data);
    setData("");
  };

  const handleEdit = () => {
    Edittodo(editedId, data);
    setData("");
    setToggel(!toggel);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TextField
        className={classes.text}
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
      {toggel ? (
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Add Todo
        </Button>
      ) : (
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={handleEdit}
        >
          Confirm
        </Button>
      )}
      <div className="todolist">
        {props.todo.map((element) => {
          return (
            <div className="todo">
              <TextField
                id="outlined-basic"
                label={element.data}
                variant="outlined"
                className={classes.todo_data}
                disabled={true}
              />
              <Button
                className={classes.todo_btn}
                variant="contained"
                color="primary"
                onClick={() => {
                  setData(element.data);
                  setToggel(!toggel);
                  setEditedId(element.id);
                }}
              >
                Edit
              </Button>
              <Button
                className={classes.todo_btn}
                variant="contained"
                color="primary"
                onClick={() => Removetodo(element.id)}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default connect((state) => state)(App);
