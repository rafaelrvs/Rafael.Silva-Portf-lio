import "./ImgContainer.css"
export const ImgContainer = () =>{

    const images = [{
        id:1,
        url: "./public/my img.png",
        descricao:"profile"
    }

    ]

    return(
        <div className="container-img" >
            {images.map( image =>(
                <img id="img" key={image.id} src={image.url} alt={image.descricao} />
            ))}
        </div>
    )
}