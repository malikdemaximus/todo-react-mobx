import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import todoStore from '../TodoStore';

const TaskForm = observer(() => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      todoStore.addTodo(task); // Use the MobX action to add a task
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            fullWidth
            label="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
});

export default TaskForm;
