import React, { useState } from "react";

// Components
import Sidebar from "../components/viewpage-components/Sidebar";
import CollectionView from "../components/viewpage-components/CollectionView";

// Images
import child from "../images/taungChild.png";
import lucy from "../images/lucy-skull.png";

// CSS
import "../index.css";
import "../../styles/specimensExplorer.css";
import { Link } from "react-router-dom";

export default function View() {
    // specimens hard coded for now
    // we can fetch it from the database when it's ready into this type of format
    const specimens = [
        {
            id: "1",
            image: lucy,
            scientificName: "Australopithecus afarensis",
            nickName: "Lucy",
            description:
                "The fossilized skull of Lucy, one of the most famous early human ancestors, discovered in Ethiopia in 1974. It provided crucial evidence of bipedalism in early hominins.",
            anthropologist: "Donald Johanson",
            activeValue: "2300",
            paidValue: "2100",
            locatedCountry: "Ethiopia",
            locatedRegion: "Afar",
            manufacturerID: "001",
            specimenID: "AL 288-1",
            genus: "Australopithecus",
            species: "Afarensis",
            purchased: "11/24/2018",
            purchaser: "unknown",
            manufacturer: "N/A",
            material: "Reproduction",
            madeIn: "Africa",
        },
        {
            id: "2",
            image: child,
            scientificName: "Australopithecus africanus",
            nickName: "Taung Child",
            description:
                "The Taung Child is the first early hominin fossil discovered in Africa, providing key insights into human evolution. It is a well-preserved juvenile skull.",
            anthropologist: "Raymond Dart",
            activeValue: "500",
            paidValue: "400",
            locatedCountry: "South Africa",
            locatedRegion: "North West Province",
            manufacturerID: "002",
            specimenID: "AL 45-l",
            genus: "Australopithecus",
            species: "Africanus",
            purchased: "02/02/2019",
            purchaser: "unknown",
            manufacturer: "USA",
            material: "Reproduction",
            madeIn: "Africa",
        },
    ];

    const [searchTerm, setSearchTerm] = useState(""); // For inventory search bar
    const [viewType, setViewType] = useState("grid"); // Grid or list

    // Filters each specimens if it includes the search bar value,
    // Should work with any column
    const filteredSpecimens = specimens.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Toggles grid or list view
    const toggleView = () => {
        setViewType((prev) => (prev === "grid" ? "list" : "grid"));
    };

    return (
        <div className="view-page">
            <Sidebar specimens={specimens} setSearchTerm={setSearchTerm} />

            <div className="specimens-view-container">
                <div className="view-add-btn">
                    <Link to={`/AddProduct`}>Add Product</Link>
                </div>

                <div className="view-controls">
                    <input
                        type="text"
                        placeholder="Inventory Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <button
                        id="grid-list-toggle"
                        type="button"
                        onClick={toggleView}
                    >
                        <img
                            src="../svg/grid.svg"
                            alt="Grid Icon"
                            id="grid-view"
                            className={viewType === "grid" ? "active" : ""}
                        />
                        <img
                            src="../svg/list.svg"
                            alt="List Icon"
                            id="list-view"
                            className={viewType === "list" ? "active" : ""}
                        />
                    </button>
                </div>

                <CollectionView
                    specimens={filteredSpecimens}
                    viewType={viewType}
                />
            </div>
        </div>
    );
}
