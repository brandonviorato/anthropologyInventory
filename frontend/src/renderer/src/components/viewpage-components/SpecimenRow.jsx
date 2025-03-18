// SpecimenCard is a component that shows in list view

import React from "react";

const SpecimenRow = ({ specimen, tableColumns }) => {
    return (
        <tr
            className="specimen-link"
            onClick={() => (window.location.href = `/specimen/${specimen._id}`)}
        >
            <td className="specimen-image">
                <img
                    src={specimen.images?.[0] ? `http://localhost:3001${specimen.images[0]}` : "src/images/image-not-found.jpg"}
                    alt="Specimen"
                    className="table-img"
                />
            </td>
            {tableColumns.map((key, i) => (
                <td key={i}>{specimen[key]}</td>
            ))}
        </tr>
    );
};

export default SpecimenRow;
