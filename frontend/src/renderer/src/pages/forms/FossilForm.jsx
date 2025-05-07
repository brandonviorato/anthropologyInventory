import { useState } from 'react'
import { addArtifact } from '../../utils/api'
import { validateInput } from '../../utils/add_artifact_validation'
import { ToastContainer, toast, Bounce } from 'react-toastify'

import {
  manufacturerOptions,
  materialOptions,
  countryOptions
} from '../../assets/forms/selectOptions'
import { selectStyles } from '../../assets/forms/selectStyles'

import '../../styles/form-styles.css'
import PurchaseInfo from '../../components/form-components/form-sections/PurchaseInfo'
import FormInput from '../../components/form-components/FormInput'
import FormFieldset from '../../components/form-components/FormFieldset'
import FormSelect from '../../components/form-components/FormSelect'
import DiscoveryDetails from '../../components/form-components/form-sections/DiscoveryDetails'
import DescriptionNotes from '../../components/form-components/form-sections/DescriptionNotes'
import PhotoUpload from '../../components/form-components/PhotoUpload'

const FossilForm = () => {
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [formData, setFormData] = useState({
    category: 'Fossil',
    genus: '',
    species: '',
    nickName: '',
    specimenId: '',
    material: '',
    manufacturerId: '',
    manufacturer: '',
    countryManufactured: '',
    anthropologist: '',
    activeValue: 0,
    paidValue: 0,
    dateOfPurchase: '',
    purchaser: '',
    regionFound: '',
    countryFound: '',
    location: '',
    description: '',
    notes: '',
    image: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setTouched({ ...touched, [name]: value })

    const input = validateInput(name, value)
    setErrors({ ...errors, [name]: input[name] || '' })
  }

  const handleSelectChange = (selectedOption, name) => {
    const input = validateInput(name, selectedOption.value)
    setErrors(input)

    if (Object.keys(input).length === 0) {
      setFormData((prev) => ({ ...prev, [name]: selectedOption.value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const hasValidationErrors = Object.values(errors).some(Boolean)
    if (hasValidationErrors) {
      console.log('Form has validation errors')
      console.log(errors)
      return // prevent form submission if errors exist
    }
    const result = await addArtifact(formData)
    if (result) {
      console.log('Submitted Data:', formData)
      toast.success('Artifact Added 😄', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} id="fossil-form" autoComplete="on">
      <ToastContainer />
      <h2 className="form-title">Add Fossil</h2>
      <FormFieldset
        fieldsetID={'specimen-info'}
        title={'Specimen Information'}
        fields={[
          <FormInput
            key={'genus'}
            label={'Genus'}
            inputType={'text'}
            inputName={'genus'}
            placeholderTxt={'e.g. Homo'}
            isRequired={true}
            inputValue={formData.genus}
            changeFunc={handleChange}
            inputClass={formData.genus === '' ? '' : errors.genus ? 'invalid' : 'valid'}
            validationErr={errors.genus}
          />,
          <FormInput
            key={'species'}
            label={'Species'}
            inputType={'text'}
            inputName={'species'}
            placeholderTxt={'e.g. Sapiens'}
            isRequired={true}
            inputValue={formData.species}
            changeFunc={handleChange}
            inputClass={formData.species === '' ? '' : errors.species ? 'invalid' : 'valid'}
            validationErr={errors.species}
          />,
          <FormInput
            key={'nickname'}
            label={'Nickname (optional)'}
            inputType={'text'}
            inputName={'nickName'}
            placeholderTxt={'e.g. Lucy'}
            isRequired={false}
            inputValue={formData.nickName}
            changeFunc={handleChange}
            inputClass={formData.nickName === '' ? '' : errors.nickName ? 'invalid' : 'valid'}
            validationErr={errors.nickName}
          />,
          <FormInput
            key={'specimenId'}
            label={'Specimen ID'}
            inputType={'text'}
            inputName={'specimenId'}
            placeholderTxt={'e.g. AL288-1'}
            isRequired={true}
            inputValue={formData.specimenId}
            changeFunc={handleChange}
            inputClass={formData.specimenId === '' ? '' : errors.specimenId ? 'invalid' : 'valid'}
            validationErr={errors.specimenId}
          />
        ]}
      />
      <DiscoveryDetails
        anthropologistData={{ value: formData.anthropologist, errors: errors.anthropologist }}
        regionData={{ value: formData.regionFound, errors: errors.regionFound }}
        countryData={formData.countryFound}
        changeFunc={handleChange}
        selectChangeFunc={handleSelectChange}
      />
      <DescriptionNotes
        locationData={{ value: formData.location, errors: errors.location }}
        descriptionData={formData.description}
        notesData={formData.notes}
        changeFunc={handleChange}
      />
      <FormFieldset
        fieldsetID="manufacturing-details"
        title="Manufacturing Details"
        fields={[
          <FormSelect
            key="manufacturer"
            label="Manufacturer"
            selectName="manufacturer"
            selectValue={formData.manufacturer}
            changeFunc={handleSelectChange}
            selectOptions={manufacturerOptions}
            selectStyles={selectStyles(!!formData.manufacturer)}
            selectClass={!errors.manufacturer && formData.manufacturer !== '' ? 'valid' : ''}
          />,
          <FormInput
            key="manufacturerId"
            label="Manufacturer ID"
            inputType="text"
            inputName="manufacturerId"
            placeholderTxt="e.g. BC-001"
            isRequired={false}
            inputValue={formData.manufacturerId}
            changeFunc={handleChange}
            inputClass={
              formData.manufacturerId === '' ? '' : errors.manufacturerId ? 'invalid' : 'valid'
            }
            validationErr={errors.manufacturerId}
          />,
          <FormSelect
            key="material"
            label="Material"
            selectName="material"
            selectValue={formData.material}
            changeFunc={handleSelectChange}
            selectOptions={materialOptions}
            selectStyles={selectStyles(!!formData.material)}
            selectClass={!errors.material && formData.material !== '' ? 'valid' : ''}
          />,
          <FormSelect
            key="countryManufactured"
            label="Country Manufactured"
            selectName="countryManufactured"
            selectValue={formData.countryManufactured}
            changeFunc={handleSelectChange}
            selectOptions={countryOptions}
            selectStyles={selectStyles(!!formData.countryManufactured)}
            selectClass={
              !errors.countryManufactured && formData.countryManufactured !== '' ? 'valid' : ''
            }
          />
        ]}
      />
      <PurchaseInfo
        dateData={{ value: formData.dateOfPurchase, errors: errors.dateOfPurchase }}
        purchaserData={{ value: formData.purchaser, errors: errors.purchaser }}
        paidData={{ value: formData.paidValue, errors: errors.paidValue }}
        activeValData={{ value: formData.activeValue, errors: errors.activeValue }}
        changeFunction={handleChange}
      />
      <FormFieldset
        fieldsetID={'file-upload'}
        title={'Photo Upload'}
        fields={[<PhotoUpload key={'photoupload'} formData={formData} setFormData={setFormData} />]}
      />
      <button type="submit" id="submit-btn">
        Add to collection
      </button>
    </form>
  )
}

export default FossilForm
