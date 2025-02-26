
function ArtifactCard({imgSrc, description, scientificName, id}) {
    return (
        <div id="artifact-card">
            <img id="artifact-img" src={imgSrc} alt={description}/>
            <p>{scientificName}</p>
            <p>{id}</p>
        </div>
    )
}

export default ArtifactCard;