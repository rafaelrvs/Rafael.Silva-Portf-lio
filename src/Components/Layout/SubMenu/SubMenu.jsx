import { useState } from "react"
import "./SubMenu.css"
const SubMenu = (props) => {

    const [menuAtivo, setMenuAtivo] = useState(props)
    const desativaMenu = () => {
        setMenuAtivo(!menuAtivo)
      
    }
    if(menuAtivo)
    return (
        <div className="SubcontainerMenu">
            <p id="closeMenu" onClick={desativaMenu}>X</p>
            <div className="container-content">
                <ul>
                    <li>
                        Redes Sociais
                        
                    </li>
                    <li>
                        Proximos Projetos
                    </li>
                    <li>
                        Metas
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SubMenu