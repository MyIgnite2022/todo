
import { useEffect, useState } from 'react';
import { Box } from './components/Box';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Newtask } from './components/NewTask';
import { StatusTasks } from './components/StatusTasks';
import { Task } from './components/Task';
import './global.scss';

interface TasksProps {
  description: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([])

  useEffect(() => {
    setTasks([
      {
        description: 'Task 1',
        isChecked: false
      },
      {
        description: 'Task 2',
        isChecked: false
      },
      {
        description: 'Task 3',
        isChecked: false
      },
      {
        description: 'Task 4',
        isChecked: false
      }
    ])
  }, [])


  return (
    <>
      <Header />
      <Container>
        <Newtask />
        <StatusTasks />
        <Box>
          { tasks.map(task => {
            return <Task key={task.description}/>
          })}
        </Box>
      </Container>
    </>
  )
}

export default App; 
