
import { useState } from "react"
import { Menu } from "../Layout/Menu/Menu"
import "./Header.css"

export const Header = () =>{

const [menuAtivo] = useState(true)
   
    return(
        <header className="header-app">
      
        <p id="rafa"> Olá, sou o Rafael!</p>
        {menuAtivo &&  <Menu menuAtivo /> }

        </header>

    )
}