import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import todoStore from './TodoStore';

const App = observer(() => {
  // useEffect(() => {
  //   // Fetch tasks when the app loads
  //   todoStore.fetchTasks();
  // }, []);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
});

export default App;