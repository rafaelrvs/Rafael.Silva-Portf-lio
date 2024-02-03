import "./ImagesProject.css"

const ImagesProject =() =>{
    const images = [
        {
        Titulo:"RoboTron",
        url:"./public/Roboimg.png",
        description:"Robo",
        buttonLink:"https://manipulacao-dom-one.vercel.app/"
    },
    {
        Titulo:"Relogio",
        url:"./public/relogio.png",
        description:"relogio",
        buttonLink:"https://manipulacao-dom-one.vercel.app/"
    },
    {
        Titulo:"Advinhe o numero",
        url:"./public/imgAdivinheOnumero.png",
        description:"Adivinhe o numero",
        buttonLink:"https://manipulacao-dom-one.vercel.app/"
    },
    {
        Titulo:"Projeto kotlin",
        url:"./public/coração café.png",
        description:"Calculadora",
        buttonLink:"https://video-projeto-alessandro-f.vercel.app/"
    },
    {
        Titulo:"Acerte o Alvo",
        url:"./public/acerteAlvo.png",
        description:"Alvo",
        buttonLink:"https://acerte-o-alvo.vercel.app/"
    },
    {
        Titulo:"Calculo IMC",
        url:"./public/Captura de tela 2024-02-03 125330.png",
        description:"Alvo",
        buttonLink:"https://avaliacao-fisica.vercel.app/"
    },
    
    
]





    return(
        <div className="containerProjeto">
            {images.map(image =>(
                <div key={image.Titulo}>
                    <p>{image.Titulo}</p>
                    <img key={image.description} src={image.url} alt={image.description} />
                    <a key={image.Titulo} id="btn-projeto" href={image.buttonLink}>Acesse</a>
                </div>
            ))}
        </div>
    )
}
export default ImagesProject