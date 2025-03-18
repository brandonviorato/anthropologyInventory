import React from "react";

const Sidebar = ({ specimens, setSearchTerm }) => {
    const [searchTerm, setLocalSearchTerm] = React.useState("");
    // right now there is 2 categories, we can add more if we want later
    // we can also make this dynamic
    const [isOpen, setIsOpen] = React.useState({ cat1: true, cat2: true });

    // getUniqueValues since some fossils might have the same category like stone tool for example
    const getUniqueValues = (keys) => {
        // Ensure the keys is always treated as an array in case a category combines a couple of specimens column
        const keyArray = Array.isArray(keys) ? keys : [keys];

        // get all the values from the provided keys map and flatten them (you can also join them if you liked it that way)
        const values = specimens.flatMap((specimen) =>
            keyArray.map((key) => specimen?.[key] || null)
        );

        // return unique values that's not null
        return [...new Set(values.filter(Boolean))];
    };

    // Here are hard coded categories I have chosen
    const countries = getUniqueValues([
        "countryManufactured",
        "locatedCountryRegion",
    ]);
    const species = getUniqueValues("species");

    // filter the categories where the category includes the searchTerm
    const filterValues = (values) =>
        values.filter((value) =>
            (value?.toString().toLowerCase() || "").includes(
                searchTerm.toLowerCase()
            )
        );

    const filteredCountries = filterValues(countries);
    const filteredSpecies = filterValues(species);

    // Show or hide targeted category
    const toggleCategory = (category) => {
        setIsOpen((prev) => ({ ...prev, [category]: !prev[category] }));
    };

    // handleSearchSelection of the category search bar which setSearchTerm
    const handleSearchSelection = (value) => {
        setSearchTerm(value);
    };

    return (
        <div className="sidebar">
            {/* Categories search bar */}
            <div>
                <input
                    className="categories-search-bar"
                    type="text"
                    placeholder="Category Search..."
                    value={searchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}
                />
            </div>

            {/* Categories list where the values will be added to the category you set */}
            {Object.entries({ cat1: "Countries", cat2: "Species" }).map(
                ([key, label]) => (
                    <div key={key} className="categories">
                        <button
                            className="category-toggle"
                            onClick={() => toggleCategory(key)}
                        >
                            {label} {isOpen[key] ? "▲" : "▼"}
                        </button>
                        {isOpen[key] && (
                            <ul>
                                {(key === "cat1"
                                    ? filteredCountries
                                    : filteredSpecies
                                ).map((value, i) => (
                                    <li
                                        key={`${key}-${i}`}
                                        onClick={() =>
                                            handleSearchSelection(value)
                                        }
                                    >
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )
            )}
        </div>
    );
};

export default Sidebar;
