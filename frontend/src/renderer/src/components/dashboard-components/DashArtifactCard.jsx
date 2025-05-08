import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Card component for displaying artifact details in the dashboard.
 *
 * @component
 * @param {string} imgSrc - The URL of the artifact image.
 * @param {string} description - The description of the artifact (used for alt text).
 * @param {string} scientificName - The scientific name of the artifact.
 * @param {string} id - The specimen ID.
 * @returns {JSX.Element} The rendered DashArtifactCard component.
 */
function DashArtifactCard({ imgSrc, description, scientificName, specimenId, id }) {
  return (
    <Link to={`/specimen/${id}`} id="artifact-card-link">
      <div id="artifact-card">
        <img id="artifact-img" src={imgSrc} alt={description} />
        <div>
          <p>{scientificName}</p>
          <p>{specimenId}</p>
        </div>
      </div>
    </Link>
  )
}

DashArtifactCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string,
  scientificName: PropTypes.string,
  specimenId: PropTypes.string,
  id: PropTypes.string.isRequired
}

export default DashArtifactCard
