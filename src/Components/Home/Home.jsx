import { Header } from "../Header/Header"
import { IconLanguage } from "../IconLanguage/IconLanguage"
import ImagesProject from "../ImagesProject/ImagesProject"
import { ImgContainer } from "../ImgContainer/Imgcontainer"
import ParagrafoContainer from "../ParagrafoContainer/ParagrafoContainer"
import ParagrafoProjeto from "../ParagrafoProjeto/ParagrafoProjeto"

function Home (){

    return(

 <>
       <Header/>
        <ImgContainer/>
        <ParagrafoContainer/>
        <IconLanguage/>
        <ParagrafoProjeto/>
        <ImagesProject/>
    </>
        )
}
export default Home