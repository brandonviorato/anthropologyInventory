/**
 * Card component for displaying artifact details in the dashboard.
 *
 * @component
 * @param {string} imgSrc - The URL of the artifact image.
 * @param {string} description - The description of the artifact (used for alt text).
 * @param {string} scientificName - The scientific name of the artifact.
 * @param {string} id - The unique identifier for the artifact.
 * @returns {JSX.Element} The rendered DashArtifactCard component.
 */
function DashArtifactCard({ imgSrc, description, scientificName, id }) {
  return (
    <div id="artifact-card">
      <img id="artifact-img" src={imgSrc} alt={description} />
      <p>{scientificName}</p>
      <p>{id}</p>
    </div>
  )
}

export default DashArtifactCard
