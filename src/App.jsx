
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'

function App() {


  return (
    <div className='containerApp'>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}/>
    
    </Routes>
    </BrowserRouter>

    </div>
 
  )
}

export default App
