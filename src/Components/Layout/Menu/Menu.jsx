import { useState } from "react"
import "./Menu.css"
import SubMenu from "../SubMenu/SubMenu"
export const Menu = ()=>{
const [subMenuAtivo,setSubMEnuAtivo] = useState(false)
function handleActiveMenu() {
    setSubMEnuAtivo(!subMenuAtivo)
}
    return(
        <div className="containerMenu" onClick={handleActiveMenu} >
            <div id="linha" ></div>
            <div id="linha" ></div>
            <div id="linha" ></div>
           {subMenuAtivo && <SubMenu subMenuAtivo={subMenuAtivo}/>}
        </div>
    )
}