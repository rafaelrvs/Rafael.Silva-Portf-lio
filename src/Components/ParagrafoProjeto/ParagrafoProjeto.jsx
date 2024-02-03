import "./ParagrafoProjeto.css"

 function  ParagrafoProjeto(){

    const textos = [{
        id:1,
        paragrafo: "Projetos:",
       },
    ]



    return(
        <div className="containerParagrafoProjeto">
            {textos.map( texto =>(
                <p key={texto.id}>{texto.paragrafo}</p>

            ))}
        </div>
    )
}
export default ParagrafoProjeto