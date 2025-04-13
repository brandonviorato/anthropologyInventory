import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArtifactById, updateArtifact } from '../utils/api'

const UpdateProduct = () => {
  const { id } = useParams() // Get artifact ID from URL
  const [formData, setFormData] = useState(null)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)

  // Fetch artifact details on mount
  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        const artifact = await getArtifactById(id)
        if (!artifact) {
          setError('Artifact not found.')
          setLoading(false)
          return
        }
        setFormData(artifact)
        if (artifact.image) setPreview(artifact.image)
      } catch (err) {
        setError('Failed to load artifact data.')
      }
      setLoading(false)
    }

    fetchArtifact()
  }, [id])

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      setError('Only JPG, PNG, and WEBP images are allowed.')
      return
    }

    setError(null)
    setFormData({ ...formData, file })
    setPreview(URL.createObjectURL(file))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setLoading(true)

    try {
      console.log('Sending update request:', {
        id,
        formData
      })

      const updatedArtifact = await updateArtifact(id, formData)
      if (updatedArtifact) {
        setSuccess('Artifact updated successfully!')
      } else {
        setError('Failed to update artifact.')
      }
    } catch (err) {
      setError('An error occurred while updating.')
    }

    setLoading(false)
  }

  if (loading) return <p>Loading artifact details...</p>
  if (error) return <p className="error-message">{error}</p>

  return (
    <form onSubmit={handleSubmit} id="update-form">
      <h2 className="form-title">Update Artifact</h2>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

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
            <img src={preview} alt="Preview" className="file-preview" />
          ) : (
            <div className="file-placeholder">
              <div>📁+</div>
              <p>Upload Photo</p>
            </div>
          )}
        </label>
        <input type="file" name="image" id="fileInput" onChange={handleFileChange} hidden />
      </div>

      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? 'Updating...' : 'Update'}
      </button>
    </form>
  )
}

export default UpdateProduct
