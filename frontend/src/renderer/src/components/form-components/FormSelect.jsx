import PropTypes from 'prop-types'
import Select from 'react-select'

function FormSelect({
  label,
  selectName,
  isRequired,
  selectValue,
  changeFunc,
  selectOptions,
  selectStyles,
  selectClass,
  tooltip
}) {
  return (
    <section>
      <label>{label}</label>
      <Select
        name={selectName}
        required={isRequired}
        value={selectOptions.find((option) => option.value === selectValue)}
        onChange={(selectedOption) => changeFunc(selectedOption, selectName)}
        options={selectOptions}
        styles={selectStyles}
        className={selectClass}
      />
      {tooltip && <small className="tooltip">{tooltip}</small>}
    </section>
  )
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  selectValue: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired,
  selectOptions: PropTypes.array.isRequired,
  selectStyles: PropTypes.any,
  selectClass: PropTypes.any,
  tooltip: PropTypes.string
}

export default FormSelect
