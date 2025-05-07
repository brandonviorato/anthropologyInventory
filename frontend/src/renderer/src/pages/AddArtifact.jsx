import { useState } from 'react'
import Select from 'react-select'
import FossilForm from './forms/FossilForm.jsx'
import PotteryForm from './forms/PotteryForm.jsx'
import WeaponryForm from './forms/WeaponryForm.jsx'
import ToolForm from './forms/ToolForm.jsx'
import StoneToolForm from './forms/StoneToolForm.jsx'
import { categoryOptions } from '../assets/forms/selectOptions.jsx'
import { selectStyles } from '../assets/forms/selectStyles.jsx'

export default function AddArtifact() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value)
  }

  const renderForm = () => {
    switch (selectedCategory) {
      case 'Fossil':
        return <FossilForm />
      case 'Pottery':
        return <PotteryForm />
      case 'Weaporny':
        return <WeaponryForm />
      case 'Tool (non-weaponry)':
        return <ToolForm />
      case 'Stone Tool':
        return <StoneToolForm />
    }
  }

  return (
    <>
      <fieldset id="category-select">
        <h3>Category Select</h3>
        <section>
          <label>Category</label>
          <Select
            id="category"
            name="category"
            required
            onChange={handleChange}
            value={categoryOptions.find((option) => option.value === selectedCategory)}
            options={categoryOptions}
            styles={selectStyles}
          />
          <small className="hint">Category of artifact being added.</small>
        </section>
      </fieldset>
      {renderForm()}
    </>
  )
}
