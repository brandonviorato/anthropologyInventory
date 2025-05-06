import { useState } from 'react'
import { addPottery } from '../../utils/api'
import { validateInput } from '../../utils/add_artifact_validation'
import { ToastContainer, toast, Bounce } from 'react-toastify'

import Select from 'react-select'

import '../../styles/form-styles.css'
import PurchaseInfo from '../../components/form-components/form-sections/PurchaseInfo'
import FormFieldset from '../../components/form-components/FormFieldset'
import DiscoveryDetails from '../../components/form-components/form-sections/DiscoveryDetails'
import DescriptionNotes from '../../components/form-components/form-sections/DescriptionNotes'
import PhotoUpload from '../../components/form-components/PhotoUpload'

const PotteryForm = () => {
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    category: 'Pottery',
    anthropologist: '',
    regionFound: '',
    countryFound: '',
    location: '',
    description: '',
    notes: '',
    activeValue: 0,
    paidValue: 0,
    dateOfPurchase: '',
    purchaser: '',
    image: null
  })

  const handleChange = (e) => {
    const input = validateInput(e.target.name, e.target.value)
    setErrors(input)
    if (Object.keys(input).length === 0) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleSelectChange = (selectedOption, name) => {
    console.log(selectedOption)
    const input = validateInput(name, selectedOption.value)
    setErrors(input)

    if (Object.keys(input).length === 0) {
      setFormData((prev) => ({ ...prev, [name]: selectedOption.value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Object.keys(errors).length > 0) {
      console.log('Form has validation errors')
      return // prevent form submission if errors exist
    }
    const result = await addPottery(formData)
    if (result) {
      console.log('Submitted Data:', formData)
      toast.success('Artifact Added 😄', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} id="pottery-form" autoComplete="on">
      <ToastContainer />
      <h2 className="form-title">Add Pottery</h2>
      <DiscoveryDetails
        anthropologistData={formData.anthropologist}
        anthropologistError={errors.anthropologist}
        regionData={formData.regionFound}
        countryData={formData.countryFound}
        changeFunc={handleChange}
        selectChangeFunc={handleSelectChange}
      />
      <DescriptionNotes
        descriptionData={formData.description}
        notesData={formData.notes}
        changeFunc={handleChange}
      />
      <PurchaseInfo
        dateData={formData.dateOfPurchase}
        purchaserData={formData.purchaser}
        paidData={formData.paidValue}
        activeValData={formData.activeValue}
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

export default PotteryForm
