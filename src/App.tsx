
import { Box } from './components/Box';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Newtask } from './components/NewTask';
import { StatusTasks } from './components/StatusTasks';
import { Task } from './components/Task';
import './global.scss';

function App() { 
  return (
    <>
      <Header />
      <Container>
        <Newtask />
        <StatusTasks />
        <Box mt={8}>
          <Task />
          <Task />
          <Task />
        </Box>
      </Container>
    </>
  )
}

export default App; 
