import PropTypes from 'prop-types'
import '../../styles/form-styles.css'

function FormFieldset({ fieldsetID, title, fields }) {
  return (
    <fieldset id={fieldsetID}>
      <h3>{title}</h3>
      {fields}
    </fieldset>
  )
}

FormFieldset.propTypes = {
  fieldsetID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.node)
}

export default FormFieldset
