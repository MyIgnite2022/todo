import { Checkbox } from './components/Checkbox'
import { CreateButton } from './components/CreateButton'
import { DeleteButton } from './components/DeleteButton'
import { Input } from './components/Input'
import { Task } from './components/Task'
import './global.scss'

function App() {
  
  return (
    <>
    <Input />
    <Input />
    <Checkbox />
    <Checkbox />
    <DeleteButton />
    <CreateButton />
    <Task />
    <Task />
    </>
  )
}

export default App
