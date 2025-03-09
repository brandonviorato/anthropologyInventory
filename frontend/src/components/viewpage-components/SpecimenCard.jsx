// SpecimenCard is a component that shows in grid view

const SpecimenCard = ({ specimen }) => {
    return (
        <div className="specimen-card">
            <div className="specimen-img">
                <img
                    src={
                        specimen.images?.[0] || "src/images/image-not-found.jpg"
                    }
                    alt={specimen.nickName || "Unknown Specimen"}
                    className="specimen-image"
                />

                <button>
                    <img src="../../../svg/dots.svg" alt="" />
                </button>
            </div>
            <div className="specimen-info">
                <p>{specimen.nickName ? specimen.nickName : "N/A"}</p>
                <p>
                    {specimen.scientificName ? specimen.scientificName : "N/A"}
                </p>
            </div>
        </div>
    );
};

export default SpecimenCard;
