export default function CategorySelect() {
  return (
    <fieldset id="category-select">
      <h3>What do you want to add?</h3>
      <select id="category" name="category" required value={'item'}>
        <option value="bone">Bone</option>
        <option value="pottery">Pottery</option>
        <option value="tools">Tools</option>
      </select>
    </fieldset>
  )
}
