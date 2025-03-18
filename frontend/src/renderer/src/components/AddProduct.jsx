import { useState } from "react";
import { addArtifact } from "../utils/api";

const AddProduct = () => {
    // form data
    const [formData, setFormData] = useState({
        genus: "",
        species: "",
        nickName: "",
        specimenId: "",
        material: "",
        manufacturerId: "",
        manufacturer: "",
        countryManufactured: "",
        anthropologist: "",
        activeValue: "",
        paidValue: "",
        dateOfPurchase: "",
        purchaser: "",
        regionFound: "",
        countryFound: "",
        locationId: "",
        description: "",
        notes: "",
        file: null,
    });

    // Image preview
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, file });
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const result = await addArtifact(formData);
        if(result) {
            console.log("Submitted Data:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="add-form">
            <h2 className="form-title">Add Artifact</h2>
            <div id="specimen-info">
                <h3>Specimen Information</h3>
                <div>
                    <label>Genus:</label>
                    <input
                        type="text"
                        name="genus"
                        placeholder="Genus"
                        value={formData.genus}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Species:</label>
                    <input
                        type="text"
                        name="species"
                        placeholder="Species"
                        value={formData.species}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Nickname:</label>
                    <input
                        type="text"
                        name="nickName"
                        placeholder="Nickname"
                        value={formData.nickName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Specimen ID:</label>
                    <input
                        type="text"
                        name="specimenId"
                        placeholder="Specimen ID"
                        value={formData.specimenId}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div id="discovery-details">
                <h3>Discovery Details</h3>
                <div>
                    <label>Lead Anthropoligst:</label>
                    <input
                        type="text"
                        name="anthropologist"
                        placeholder="Anthropologist"
                        value={formData.anthropologist}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Region Found:</label>
                    <input
                        type="text"
                        name="regionFound"
                        placeholder="Region Found"
                        value={formData.regionFound}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Country Found:</label>
                    <input
                        type="text"
                        name="countryFound"
                        placeholder="Country Found"
                        value={formData.countryFound}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div id="description-notes">
                <h3>Description & Notes</h3>
                <div>
                    <label>Location ID:</label>
                    <input
                        type="text"
                        name="locationId"
                        placeholder="Location ID"
                        value={formData.locationId}
                        onChange={handleChange}
                    />
                </div>
                <div id="description-div">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div id="notes-div">
                    <label>Notes:</label>
                    <textarea
                        name="notes"
                        placeholder="Notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div id="manufacturing-details">
                <h3>Manufacturing Details</h3>
                <div>
                    <label>Material:</label>
                    <input
                        type="text"
                        name="material"
                        placeholder="Material"
                        value={formData.material}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Manufacturer:</label>
                    <input
                        type="text"
                        name="manufacturer"
                        placeholder="Manufacturer"
                        value={formData.manufacturer}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Manufacturer ID:</label>
                    <input
                        type="text"
                        name="manufacturerId"
                        placeholder="Manufacturer ID"
                        value={formData.manufacturerId}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Country Manufactured:</label>
                    <input
                        type="text"
                        name="countryManufactured"
                        placeholder="Country Manufactured"
                        value={formData.countryManufactured}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div id="purchase-info">
                <h3>Acquisition Information</h3>
                <div>
                    <label>Date of Purchase:</label>
                    <input
                        type="date"
                        name="dateOfPurchase"
                        placeholder="Date of Purchase"
                        value={formData.dateOfPurchase}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Purchaser:</label>
                    <input
                        type="text"
                        name="purchaser"
                        placeholder="Purchaser"
                        value={formData.purchaser}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cost:</label>
                    <input
                        type="number"
                        name="paidValue"
                        placeholder="Paid Value"
                        value={formData.paidValue}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Current Value:</label>
                    <input
                        type="number"
                        name="activeValue"
                        placeholder="Active Value"
                        value={formData.activeValue}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="file-upload">
                <label htmlFor="fileInput" className="file-label">
                    {preview ? (
                        <img
                            src={preview}
                            alt="Preview"
                            className="file-preview"
                        />
                    ) : (
                        <div className="file-placeholder">
                            <div>📁+</div>
                            <p>Upload Photo</p>
                        </div>
                        
                    )}
                </label>
                <input
                    type="file"
                    name="image"
                    id="fileInput"
                    onChange={handleFileChange}
                    hidden
                />
            </div>

            <button type="submit" className="submit-button">
                Add
            </button>
        </form>
    );
};

export default AddProduct;
