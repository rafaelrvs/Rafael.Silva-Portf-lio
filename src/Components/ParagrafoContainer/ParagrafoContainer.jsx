import "./ParagrafoContainer.css"
 function  ParagrafoContainer(){

    const textos = [{
        id:1,
        paragrafo: "Desenvolvedor de software, conheço  algumas tecnologias como:",
       },
    ]



    return(
        <div className="containerParagrafo">
            {textos.map( texto =>(
                <p key={texto.id}>{texto.paragrafo}</p>

            ))}
        </div>
    )
}
export default ParagrafoContainer