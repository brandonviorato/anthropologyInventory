import { useState } from 'react'
import BoneForm from './forms/BoneForm.jsx'
import PotteryForm from './forms/PotteryForm.jsx'
import ToolForm from './forms/ToolForm.jsx'

export default function AddProduct() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const renderForm = () => {
    switch (selectedCategory) {
      case 'Bone':
        return <BoneForm />
      case 'Pottery':
        return <PotteryForm />
      case 'Tools':
        return <ToolForm />
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
            <option value="Bone">Bone</option>
            <option value="Pottery">Pottery</option>
            <option value="Tools">Tools</option>
          </select>
          <small className="tooltip">Category of item being added.</small>
        </div>
      </fieldset>
      {renderForm()}
    </>
  )
}
