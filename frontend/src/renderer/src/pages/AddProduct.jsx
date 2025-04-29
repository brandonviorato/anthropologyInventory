import { useState } from 'react'
import FossilForm from './forms/FossilForm.jsx'
import PotteryForm from './forms/PotteryForm.jsx'
import StoneToolForm from './forms/StoneToolForm.jsx'

export default function AddProduct() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const renderForm = () => {
    switch (selectedCategory) {
      case 'Fossil':
        return <FossilForm />
      case 'Pottery':
        return <PotteryForm />
      case 'Stone Tool':
        return <StoneToolForm />
    }
  }

  return (
    <>
      <fieldset id="category-select">
        <h3>Category Select</h3>
        <div>
          <label>Category</label>
          <select
            id="category"
            name="category"
            required
            onChange={handleChange}
            value={selectedCategory || ''}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Fossil">Fossil</option>
            <option value="Pottery">Pottery</option>
            <option value="Stone Tool">Stone Tools</option>
            <option value="Weaponry">Weaponry</option>
            <option value="Tool (non-weaponry)">Tools (non-weaponry)</option>
          </select>
          <small className="tooltip">Category of item being added.</small>
        </div>
      </fieldset>
      {renderForm()}
    </>
  )
}
