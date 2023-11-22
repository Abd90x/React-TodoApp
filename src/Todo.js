import { ListItem, ListItemText, Button, Stack } from "@mui/material";
import React from "react";
import { db } from "./firebase_config";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";

function Todo({ todo, isComplete, id }) {
  const toggleComplete = () => {
    db.collection("todos").doc(id).update({
      isComplete: !isComplete,
    });
  };

  const deleteTodo = () => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <Stack direction="row" spacing={2} width={350}>
      <ListItem>
        <ListItemText
          style={{ maxWidth: "190px" }}
          primary={todo}
          secondary={isComplete ? "Done ✅" : "In Progress 💻"}
          primaryTypographyProps={{ style: { wordBreak: "break-all" } }}
        ></ListItemText>

        <Stack direction="row" spacing={0} alignItems={"center"}>
          <Button onClick={toggleComplete}>
            {isComplete ? <UndoIcon /> : <DoneIcon />}
          </Button>
          <Button onClick={deleteTodo}>
            <DeleteIcon />
          </Button>
        </Stack>
      </ListItem>
    </Stack>
  );
}

export default Todo;
