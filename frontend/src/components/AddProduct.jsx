import { useState } from "react";

const AddProduct = () => {
    // form data
    const [formData, setFormData] = useState({
        scientificName: "",
        nickName: "",
        anthropologist: "",
        activeValue: "",
        paidValue: "",
        located: "",
        countryRegion: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-title">Add Product</h2>

            <div className="form-top">
                <input
                    type="text"
                    name="scientificName"
                    placeholder="Scientific Name"
                    value={formData.scientificName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="nickName"
                    placeholder="Nick Name"
                    value={formData.nickName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="anthropologist"
                    placeholder="Anthropologist"
                    value={formData.anthropologist}
                    onChange={handleChange}
                />
            </div>

            <div>
                <div className="two-by-two">
                    <div>
                        <input
                            type="text"
                            name="activeValue"
                            placeholder="Active Value"
                            value={formData.activeValue}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="paidValue"
                            placeholder="Paid Value"
                            value={formData.paidValue}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="located"
                            placeholder="Located"
                            value={formData.located}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="countryRegion"
                            placeholder="Country/Region"
                            value={formData.countryRegion}
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
                            <div className="file-placeholder">📁+</div>
                        )}
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange}
                        hidden
                    />
                </div>
            </div>

            <button type="submit" className="submit-button">
                Add
            </button>
        </form>
    );
};

export default AddProduct;
