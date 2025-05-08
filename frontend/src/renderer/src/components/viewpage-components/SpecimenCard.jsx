// SpecimenCard is a component that shows in grid view
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SpecimenCard = ({ specimen, onDelete }) => {
  // Card Menu Btns
  const [isDeleting, setIsDeleting] = useState(false)

  // DELETE target card that user clicked the trash button
  const handleDelete = async () => {
    // A window to double check if you really REALLY want to delete this specimen
    if (!window.confirm('Are you sure you want to delete this specimen? THERE IS NO UNDO!')) return

    setIsDeleting(true) // Extra protection for the delete btn

    try {
      const response = await fetch(`http://localhost:3001/api/specimens/${specimen._id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })

      const data = await response.json()

      if (response.ok) {
        // makes sure that onDelete is defined
        if (onDelete) onDelete(specimen._id)
      } else {
        throw new Error(data.message || 'Failed to delete specimen.')
      }
    } catch (error) {
      console.error('Error deleting specimen:', error)
      alert(error.message)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="specimen-card">
      <Link className="specimen-link" to={`/specimen/${specimen._id}`}>
        <div className="specimen-img">
          <img
            src={
              specimen.images?.[0]
                ? `http://localhost:3001${specimen.images[0]}`
                : 'http://localhost:3001/uploads/image-not-found.jpg'
            }
            alt={specimen.nickName || 'Unknown Specimen'}
            className="specimen-image"
          />
        </div>
      </Link>
      <div className="specimen-info">
        <p>{specimen.nickName ? specimen.nickName : 'N/A'}</p>

        <div className="specimen-card-btns">
          <Link className="specimen-card-btns-update" to={`/UpdateProduct/${specimen._id}`}>
            <button>Update</button>
          </Link>
          <button
            className="specimen-card-btns-delete"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            Delete
          </button>
        </div>
      </div>

      {/* <div className="specimen-card-menu">
        <button onClick={handleDelete} disabled={isDeleting}>
          <img src="http://localhost:3001/svg/trash.svg" alt="" />
        </button>
        <Link to={`/UpdateProduct/${specimen._id}`}>
          <button>
            <img src="http://localhost:3001/svg/edit.svg" alt="" />
          </button>
        </Link>
      </div> */}
    </div>
  )
}

SpecimenCard.propTypes = {
  specimen: PropTypes.any,
  onDelete: PropTypes.func
}

export default SpecimenCard
