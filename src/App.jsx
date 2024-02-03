

import './App.css'
import { Header } from './Components/Header/Header'
import { IconLanguage } from './Components/IconLanguage/IconLanguage'
import ImagesProject from './Components/ImagesProject/ImagesProject'
import { ImgContainer } from './Components/ImgContainer/Imgcontainer'
import ParagrafoContainer from './Components/ParagrafoContainer/ParagrafoContainer'
import ParagrafoProjeto from './Components/ParagrafoProjeto/ParagrafoProjeto'

function App() {


  return (
  <div className='containerApp'>
      <Header/>
        <ImgContainer/>
        <ParagrafoContainer/>
        <IconLanguage/>
        <ParagrafoProjeto/>
        <ImagesProject/>
  
  </div>
  )
}

export default App
