export const Model = ({name, path, imagePath, licensePath, industry, ip, description}) => {
    return (
        <>
            <div class="Download-Item" >
                <img class="Download-Item-Image" onError={()=>{this.onerror = null; this.src="../../Images/placeholder.png"}} href={imagePath} alt="model" download={path}></img>
                <li class="Download-Item-InfoText">
                    <li class="Download-Item-InfoText-row-name">{name}</li>
                    <li class="Download-Item-InfoText-row">{ip}</li>
                    <li class="Download-Item-InfoText-row">{industry}</li>
                    <li class="Download-Item-InfoText-row" href = {licensePath} download={licensePath}>License</li>
                    <li class="Download-Item-InfoText-row">{description}</li>
                </li>

            </div>

            
        </>
    )
};