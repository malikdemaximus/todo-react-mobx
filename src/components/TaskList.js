import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
import { observer } from 'mobx-react-lite';
import todoStore from '../TodoStore';

const TaskList = observer(() => {
  return (
    <List>
      {todoStore.todos.map((task) => (
        <ListItem key={task.id}>
          <ListItemText primary={task.title} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => todoStore.removeTodo(task.id)} // Use the MobX action to remove a task
            >
              X
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
});

export default TaskList;