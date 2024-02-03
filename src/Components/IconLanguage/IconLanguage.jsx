import "./IconLanguage.css"


export function IconLanguage(){

    const imgIcons = [
        {
            id:1,
            url:"./public/REACT-LOGO.SVG",
            description:"React"

        },
        {
            id:2,
            url:"./public/GTMLSVG.svg",
            description:"HTML"

        },
        {
            id:3,
            url:"./public/img_193675.svg",
            description:"CSS"

        },
        {
            id:4,
            url:"./public/DOWNLOAD.PNG",
            description:"JAVASCRIPT"

        },
        {
            id:5,
            url:"./public/0_MNVJq_8e0SJoqZb5.jpg",
            description:"NODE.JS"

        }
   
    ]

    return(
        <div className="containerimg-icon">


            <div className="logo1">

            {imgIcons.slice(0,3).map(image =>(
                <div>
                <img key={image.id} src={image.url} alt={image.description} />
               </div>
            ))}
            </div>
            <div className="logo2">
                    
            {imgIcons.slice(3,5).map(image =>(
                <div>
                <img key={image.id} src={image.url} alt={image.description} />
               </div>
            ))}

            </div>

            
        </div>
    )
}