
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Box } from './components/Box';
import { Container } from './components/Container';
import { EmptyTasks } from './components/EmptyTasks';
import { Header } from './components/Header';
import { Newtask } from './components/NewTask';
import { StatusTasks } from './components/StatusTasks';
import { Task } from './components/Task';

import './global.scss';

export interface TasksProps {
  description: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>(() => {
    const localTasks = localStorage.getItem("tasks");

    if (localTasks) {
      return JSON.parse(localTasks);
    }

    return []
  })

  function Tasks() {
    return tasks.map(task => (
      <Task 
        key={task.description} 
        task={task} 
        tasks={tasks}
        setTasks={setTasks}
      />
    ))
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <>
      <Header />
      <Container>
        <Newtask tasks={tasks} setTasks={setTasks}/>
        <StatusTasks tasks={tasks}/>
        <Box>
          {
            tasks.length
            ? Tasks()
            : <EmptyTasks /> 
          }
        </Box>
      </Container>
      
      <Toaster position="bottom-center" toastOptions={{
        style: {
          border: '1px solid #3d3d4d',
          padding: '16px',
          color: '#3d3d4d',
        },
      }}/>
    </>
  )
}

export default App; 
