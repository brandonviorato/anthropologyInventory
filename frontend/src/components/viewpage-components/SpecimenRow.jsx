// SpecimenCard is a component that shows in list view

import React from "react";

const SpecimenRow = ({ specimen, tableColumns }) => {
    return (
        <tr
            className="specimen-link"
            onClick={() => (window.location.href = `/specimen/${specimen.id}`)}
        >
            <td className="specimen-image">
                <img
                    src={specimen.image || "../img/img-not-found.png"}
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
