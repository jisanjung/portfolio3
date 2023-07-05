import { Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {

  return (
    <Routes>
      <Route path='/' element={<About/>}/>
    </Routes>
  )
}

export default App
