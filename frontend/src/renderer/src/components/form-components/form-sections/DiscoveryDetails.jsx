import PropTypes from 'prop-types'
import FormFieldset from '../FormFieldset'
import FormInput from '../FormInput'
import { countryOptions } from '../../../assets/forms/selectOptions'
import { selectStyles } from '../../../assets/forms/selectStyles'
import FormSelect from '../FormSelect'

function DiscoveryDetails({
  anthropologistData,
  anthropologistErrors,
  regionData,
  regionErrors,
  countryData,
  changeFunc,
  selectChangeFunc
}) {
  return (
    <FormFieldset
      fieldsetID={'discovery-details'}
      title={'Discovery Details'}
      fields={[
        <FormInput
          key={'anthropologist'}
          label={'Lead Anthropologist'}
          inputType={'text'}
          inputName={'anthropologist'}
          placeholderTxt={'e.g. Donald Johanson'}
          isRequired={false}
          value={anthropologistData}
          changeFunc={changeFunc}
          inputClass={!anthropologistErrors && anthropologistData != '' ? 'valid' : ''}
        />,
        <FormInput
          key={'regionFound'}
          label={'Region Found'}
          inputType={'text'}
          inputName={'regionFound'}
          placeholderTxt={'e.g. Afar Triangle'}
          isRequired={false}
          value={regionData}
          changeFunc={changeFunc}
          inputClass={!regionErrors && regionData != '' ? 'valid' : ''}
        />,
        <FormSelect
          key={'country found'}
          label={'Country Found'}
          selectName="countryFound"
          selectValue={countryData}
          changeFunc={selectChangeFunc}
          selectOptions={countryOptions}
          selectStyles={selectStyles}
        />
      ]}
    />
  )
}

DiscoveryDetails.propTypes = {
  anthropologistData: PropTypes.string,
  anthropologistErrors: PropTypes.any,
  regionData: PropTypes.string,
  regionErrors: PropTypes.any,
  countryData: PropTypes.string,
  changeFunc: PropTypes.func,
  selectChangeFunc: PropTypes.func
}

export default DiscoveryDetails
