import PropTypes from 'prop-types'

/**
 * Widget component meant for the dashboard.
 *
 * @component
 * @param {String} title - Widget Title.
 * @param {*} content - Widget content.
 * @param {String} identifier - Class to identify widget.
 * @returns {JSX.Element} The rendered DashboardWidget component.
 */
function DashboardWidget({ title, content, identifier }) {
  return (
    <div id="widget" className={identifier}>
      <h3>{title}</h3>
      {content}
    </div>
  )
}

DashboardWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  identifier: PropTypes.string
}

export default DashboardWidget
