// SpecimenCard is a component that shows in grid view

const SpecimenCard = ({ specimen }) => {
    return (
        <div className="specimen-card">
            <div className="specimen-img">
                <img
                    src={specimen.image || "../img/img-not-found.png"}
                    alt={specimen.nickName}
                    className="specimen-image"
                />
                <button>
                    <img src="../../../svg/dots.svg" alt="" />
                </button>
            </div>
            <div className="specimen-info">
                <p>{specimen.nickName}</p>
                <p>{specimen.scientificName}</p>
                <p>{specimen.specimenID}</p>
            </div>
        </div>
    );
};

export default SpecimenCard;
