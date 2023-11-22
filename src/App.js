import { Button, TextField, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./App.css";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { db } from "./firebase_config";
import Todo from "./Todo";
function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      db.collection("todos").add({
        isComplete: false,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todo,
        createdAt: Date.now(),
      });
      setTodo("");
    }
  };

  const getTodos = () => {
    db.collection("todos").onSnapshot((querySnapsoht) => {
      setAllTodos(
        querySnapsoht.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          isComplete: doc.data().isComplete,
          createdAt: doc.data().createdAt,
        }))
      );
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App" style={styles}>
      <h1>Abdellatif Todo App 🚀</h1>
      <form style={{ maxWidth: "500px" }}>
        <Stack direction="row" spacing={2}>
          <TextField
            id="outlined-multiline-flexible"
            label="Write Todo ⤵️"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            endIcon={<AddCircleOutlineIcon />}
            onClick={addTodo}
          >
            Add
          </Button>
        </Stack>
      </form>
      {allTodos.length > 0 ? (
        <Stack direction="column" spacing={2}>
          {allTodos
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo.todo}
                isComplete={todo.isComplete}
                id={todo.id}
              />
            ))}
        </Stack>
      ) : (
        <p>You Don't Have Any Todos Lets Add Some 🗂️</p>
      )}
    </div>
  );
}

export default App;
