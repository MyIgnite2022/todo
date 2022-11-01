
import { useState } from 'react';
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
  const [tasks, setTasks] = useState<TasksProps[]>([])

  function Tasks() {
    return tasks.map(task => {
      return <Task key={task.description} />
    })
  } 

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
    </>
  )
}

export default App; 
