import PropTypes from 'prop-types'
import FormFieldset from '../FormFieldset'
import FormInput from '../FormInput'
import FormTextarea from '../FormTextarea'

function DescriptionNotes({ locationData, locationErrors, descriptionData, notesData, changeFunc }) {
  return (
    <FormFieldset
      fieldsetID="description-notes"
      title="Description & Notes"
      fields={[
        <FormInput
          key="location"
          label="Location"
          inputType="text"
          inputName="location"
          placeholderTxt="e.g. Cabinet 1, row 2"
          isRequired={true}
          inputValue={locationData}
          changeFunc={changeFunc}
          inputClass={locationData === '' ? '' : locationErrors ? 'invalid' : 'valid'}
          hint="Physical location artifact is stored."
          validationErr={locationErrors}
        />,
        <FormTextarea
          key="description"
          label="Description (optional)"
          textareaName="description"
          placeholderTxt="e.g. Discovered during 1974 excavation in..."
          textareaValue={descriptionData}
          changeFunc={changeFunc}
        />,
        <FormTextarea
          key="notes"
          label="Notes (optional)"
          textareaName="notes"
          placeholderTxt="e.g. Consider purchasing..."
          textareaValue={notesData}
          changeFunc={changeFunc}
        />
      ]}
    />
  )
}

DescriptionNotes.propTypes = {
  locationData: PropTypes.string,
  locationErrors: PropTypes.any,
  descriptionData: PropTypes.string.isRequired,
  notesData: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired
}

export default DescriptionNotes
