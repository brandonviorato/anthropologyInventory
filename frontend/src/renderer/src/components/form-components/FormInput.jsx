import PropTypes from 'prop-types'

function FormInput({
  label,
  inputType,
  inputId,
  inputName,
  placeholderTxt,
  isRequired,
  inputValue,
  changeFunc,
  inputClass,
  hint,
  validationErr
}) {
  return (
    <section>
      <label>{label}</label>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderTxt}
        required={isRequired}
        value={inputValue}
        onChange={changeFunc}
        className={inputClass}
      />
      {hint && <small className="hint">{hint}</small>}
      {validationErr && <small className="validation-err">{validationErr}</small>}
    </section>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputId: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  placeholderTxt: PropTypes.string,
  isRequired: PropTypes.bool,
  inputValue: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired,
  inputClass: PropTypes.string,
  hint: PropTypes.string,
  validationErr: PropTypes.string
}

export default FormInput
