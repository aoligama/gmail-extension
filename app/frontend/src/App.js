import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom'
import { Templates } from 'pages/Templates'
import { NewTemplate } from 'pages/NewTemplate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/templates' element={<Templates />} />
        <Route path='/new-template' element={<NewTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App