import {
  Routes, 
  Route 
} from 'react-router-dom'
import { Templates } from './views/Templates'
import { NewTemplate } from './views/NewTemplate'

function App() {
  return (
    <Routes>
      <Route path='/templates' element={<Templates />} />
      <Route path='/new-template' element={<NewTemplate />} />
    </Routes>
  )
}

export default App