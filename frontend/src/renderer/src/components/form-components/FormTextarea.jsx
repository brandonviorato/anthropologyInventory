import PropTypes from 'prop-types'

function FormTextarea({ label, textareaId, textareaName, placeholderTxt, value, changeFunc }) {
  return (
    <section>
      <label>{label}</label>
      <textarea
        id={textareaId}
        name={textareaName}
        placeholder={placeholderTxt}
        value={value}
        onChange={changeFunc}
      />
    </section>
  )
}

FormTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  textareaId: PropTypes.string,
  textareaName: PropTypes.string.isRequired,
  placeholderTxt: PropTypes.string,
  value: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired
}

export default FormTextarea
