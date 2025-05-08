import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Card component for displaying artifact details in the dashboard.
 *
 * @component
 * @param {string} imgSrc - The URL of the artifact image.
 * @param {string} description - The description of the artifact (used for alt text).
 * @param {string} name - The name of the artifact.
 * @param {string} id - The specimen ID.
 * @returns {JSX.Element} The rendered DashArtifactCard component.
 */
function DashArtifactCard({ imgSrc, description, name, specimenId, id }) {
  return (
    <Link to={`/specimen/${id}`} id="artifact-card-link">
      <div id="artifact-card">
        <img id="artifact-img" src={imgSrc} alt={description} />
        <div>
          <p>{name}</p>
          <p>{specimenId}</p>
        </div>
      </div>
    </Link>
  )
}

DashArtifactCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string,
  name: PropTypes.string,
  specimenId: PropTypes.string,
  id: PropTypes.string.isRequired
}

export default DashArtifactCard
