import { useState } from 'react'
import { addArtifact } from '../../utils/api'
import { validateInput } from '../../utils/add_artifact_validation'
import { ToastContainer, toast, Bounce } from 'react-toastify'
<<<<<<< HEAD
import { manufacturerOptions, materialOptions, countryOptions } from '../../assets/forms/selectOptions'
import { selectStyles } from '../../assets/forms/selectStyles'
import Select from 'react-select'
=======
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660

const FossilForm = () => {
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    category: 'Fossil',
    genus: '',
    species: '',
    nickName: '',
    specimenId: '',
<<<<<<< HEAD
    material: '',
    manufacturerId: '',
    manufacturer: '',
    countryManufactured: '',
=======
    material: 'Unknown',
    manufacturerId: '',
    manufacturer: '',
    countryManufactured: 'Unknown',
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
    anthropologist: '',
    activeValue: 0,
    paidValue: 0,
    dateOfPurchase: '',
    purchaser: '',
    regionFound: '',
    countryFound: '',
    cabinet: 'C1',
    row: 'R1',
    description: '',
    notes: '',
    image: null
  })
  const [imgPreview, setImgPreview] = useState(null)

  const handleChange = (e) => {
    const input = validateInput(e.target.name, e.target.value)
    setErrors(input)
    if (Object.keys(input).length === 0) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

<<<<<<< HEAD
  const handleSelectChange = (selectedOption, { name }) => {
    const input = validateInput(name, selectedOption.value)
    setErrors(input)
  
    if (Object.keys(input).length === 0) {
      setFormData(prev => ({ ...prev, [name]: selectedOption.value }))
    }
  };

=======
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, image: file })
      setImgPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Object.keys(errors).length > 0) {
      console.log('Form has validation errors')
      return // prevent form submission if errors exist
    }
    const result = await addArtifact(formData)
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
    <form onSubmit={handleSubmit} id="add-form" autoComplete="on">
      <ToastContainer />
<<<<<<< HEAD
      <h2 className="form-title">Add Bone Artifact</h2>
      <fieldset id="specimen-info">
        <h3>Specimen Information</h3>
        <section>
=======
      <h2 className="form-title">Add Fossil</h2>
      <fieldset id="specimen-info">
        <h3>Specimen Information</h3>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Genus</label>
          <input
            type="text"
            id="genus"
            name="genus"
            placeholder="e.g. Homo"
            required
            value={formData.genus}
            onChange={handleChange}
            className={!errors.genus && formData.genus != '' ? 'valid' : ''}
          />
          {errors.genus && <small className="validation-err">{errors.genus}</small>}
<<<<<<< HEAD
        </section>
        <section>
=======
        </div>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Species</label>
          <input
            type="text"
            id="species"
            name="species"
            placeholder="e.g. Sapiens"
            required
            value={formData.species}
            onChange={handleChange}
            className={!errors.species && formData.species != '' ? 'valid' : ''}
          />
<<<<<<< HEAD
        </section>
        <section>
=======
        </div>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Nickname (optional)</label>
          <input
            type="text"
            name="nickName"
            placeholder="e.g. Lucy"
            value={formData.nickName}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </section>
        <section>
=======
        </div>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Specimen ID</label>
          <input
            type="text"
            name="specimenId"
            placeholder="e.g. AL288-1"
            required
            value={formData.specimenId}
            onChange={handleChange}
            className={!errors.specimenId && formData.specimenId != '' ? 'valid' : ''}
          />
<<<<<<< HEAD
        </section>
      </fieldset>
      <fieldset id="discovery-details">
        <h3>Discovery Details</h3>
        <section>
          <label>Lead Anthropoligst</label>
=======
        </div>
      </fieldset>
      <fieldset id="discovery-details">
        <h3>Discovery Details</h3>
        <div>
          <label>Lead Anthropoligst:</label>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <input
            type="text"
            name="anthropologist"
            placeholder="e.g. Dr. Donald Johanson"
            value={formData.anthropologist}
            onChange={handleChange}
            className={!errors.anthropologist && formData.anthropologist != '' ? 'valid' : ''}
          />
<<<<<<< HEAD
        </section>
        <section>
=======
        </div>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Region Found</label>
          <input
            type="text"
            name="regionFound"
            placeholder="e.g. Afar Triangle"
            value={formData.regionFound}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </section>
        <section>
          <label>Country Found</label>
          <Select 
            id="countryFound" 
            name="countryFound"
            value={countryOptions.find(option => option.value === formData.countryFound)}
            onChange={handleSelectChange}
            options={countryOptions}
            styles={selectStyles} 
          />
        </section>
      </fieldset>
      <fieldset id="description-notes">
        <h3>Description & Notes</h3>
        <section>
          <label>Location</label>
          <input
            type='text'
            name='location'
            placeholder='e.g. Cabinet 1, row 2'
            required
            // value={formData.regionFound}
            // onChange={handleChange}
          />
          <small className="tooltip">Physical location artifact is stored.</small>
        </section>
        <section id="description-section">
=======
        </div>
        <div>
          <label>Country Found</label>
          <select id="countryFound" name="countryFound" onChange={handleChange}>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">
              Congo, The Democratic Republic of The
            </option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D&apos;ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">
              Heard Island and Mcdonald Islands
            </option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">
              Korea, Democratic People&apos;s Republic of
            </option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">
              Lao People&apos;s Democratic Republic
            </option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">
              Macedonia, The Former Yugoslav Republic of
            </option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and The Grenadines">
              Saint Vincent and The Grenadines
            </option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">
              South Georgia and The South Sandwich Islands
            </option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">
              United States Minor Outlying Islands
            </option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
      </fieldset>
      <fieldset id="description-notes">
        <h3>Description & Notes</h3>
        <div>
          <label>Cabinet</label>
          <select
            id="locationId"
            name="cabinet"
            required
            value={formData.cabinet}
            onChange={handleChange}
          >
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="C4">C4</option>
          </select>
          <small className="tooltip">Cabinet item is stored.</small>
        </div>
        <div>
          <label>Row</label>
          <select id="locationId" name="row" required value={formData.row} onChange={handleChange}>
            <option value="R1">R1</option>
            <option value="R2">R2</option>
            <option value="R3">R3</option>
            <option value="R4">R4</option>
          </select>
          <small className="tooltip">Row in cabinet item is being stored.</small>
        </div>
        <div id="description-div">
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Description (optional)</label>
          <textarea
            name="description"
            placeholder="e.g. Discovered during 1974 excavation in..."
            value={formData.description}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </section>
        <section id="notes-section">
=======
        </div>
        <div id="notes-div">
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Notes (optional)</label>
          <textarea
            name="notes"
            placeholder="e.g. Consider purchasing..."
            value={formData.notes}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </section>
      </fieldset>
      <fieldset id="manufacturing-details">
        <h3>Manufacturing Details</h3>
        <section>
          <label>Material</label>
          <Select 
            id="material" 
            name="material" 
            value={materialOptions.find(option => option.value === formData.material)} 
            onChange={handleSelectChange} 
            className={!errors.material && formData.material != '' ? 'valid' : ''} 
            options={materialOptions}
            styles={selectStyles}  
          />
        </section>
        <section>
          <label>Manufacturer</label>
          <Select 
            id="manufacturer"
            name="manufacturer"
            value={manufacturerOptions.find(option => option.value === formData.manufacturer)}
            onChange={handleSelectChange}
            className={!errors.manufacturer && formData.manufacturer != '' ? 'valid' : ''}
            options={manufacturerOptions}
            styles={selectStyles} 
          />
        </section>
        <section>
=======
        </div>
      </fieldset>
      <fieldset id="manufacturing-details">
        <h3>Manufacturing Details</h3>
        <div>
          <label>Material</label>
          <select
            id="material"
            name="material"
            value={formData.material}
            onChange={handleChange}
            className={!errors.material && formData.material != '' ? 'valid' : ''}
          >
            <option value="Unknown">Unknown</option>
            <option value="Bone">Bone</option>
            <option value="Plaster">Plaster</option>
            <option value="Polyurethane Resin">Polyurethane Resin</option>
            <option value="Polyester Resin">Polyester Resin</option>
          </select>
        </div>
        <div>
          <label>Manufacturer</label>
          <select
            id="manufacturer"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className={!errors.manufacturer && formData.manufacturer != '' ? 'valid' : ''}
          >
            <option value="Bone Clones">Bone Clones</option>
            <option value="Skulls Unlimited">Skulls Unlimited</option>
          </select>
        </div>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Manufacturer ID</label>
          <input
            type="text"
            name="manufacturerId"
            placeholder="e.g. BC-001"
            value={formData.manufacturerId}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </section>
        <section>
          <label>Country Manufactured</label>
          <Select 
            id="countryManufactured" 
            name="countryManufactured"
            value={countryOptions.find(option => option.value === formData.countryManufactured)}
            onChange={handleSelectChange}
            className={
              !errors.countryManufactured && formData.countryManufactured != '' ? 'valid' : ''
            }
            options={countryOptions}
            styles={selectStyles}  
          />
        </section>
      </fieldset>
      <fieldset id="purchase-info">
        <h3>Acquisition Information</h3>
        <section>
=======
        </div>
        <div>
          <label>Country Manufactured</label>
          <select
            id="countryManufactured"
            name="countryManufactured"
            value={formData.countryManufactured}
            onChange={handleChange}
            className={
              !errors.countryManufactured && formData.countryManufactured != '' ? 'valid' : ''
            }
          >
            <option value="Unknown">Unknown</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">
              Congo, The Democratic Republic of The
            </option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D&apos;ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">
              Heard Island and Mcdonald Islands
            </option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">
              Korea, Democratic People&apos;s Republic of
            </option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">
              Lao People&apos;s Democratic Republic
            </option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">
              Macedonia, The Former Yugoslav Republic of
            </option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and The Grenadines">
              Saint Vincent and The Grenadines
            </option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">
              South Georgia and The South Sandwich Islands
            </option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">
              United States Minor Outlying Islands
            </option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
      </fieldset>
      <fieldset id="purchase-info">
        <h3>Acquisition Information</h3>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Date of Purchase (optional)</label>
          <input
            type="date"
            name="dateOfPurchase"
            value={formData.dateOfPurchase}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </section>
        <section>
=======
        </div>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Purchaser (optional)</label>
          <input
            type="text"
            name="purchaser"
            placeholder="e.g. Madeleine Tessandori"
            value={formData.purchaser}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </section>
        <section>
=======
        </div>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Cost (optional)</label>
          <input
            type="number"
            name="paidValue"
            placeholder="e.g. 250.00"
            value={formData.paidValue}
            onChange={handleChange}
          />
          <small className="tooltip">Amount paid for the specimen.</small>
<<<<<<< HEAD
        </section>
        <section>
=======
        </div>
        <div>
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
          <label>Current Value (optional)</label>
          <input
            type="number"
            name="activeValue"
            placeholder="e.g. 325.00"
            value={formData.activeValue}
            onChange={handleChange}
          />
          <small className="tooltip">Current value of the specimen.</small>
<<<<<<< HEAD
        </section>
      </fieldset>
      <fieldset className="file-upload">
        <h3>Photo Upload</h3>
        <section>
          <label htmlFor="fileInput" className="file-label">
            {imgPreview ? (
              <img src={imgPreview} alt="Preview" className="file-preview" />
            ) : (
              <div className="file-placeholder">
                <div>📁+</div>
                <p>Upload Photo</p>
              </div>
            )}
          </label>
          <input type="file" name="image" id="fileInput" onChange={handleFileChange} hidden />
        </section>
      </fieldset>

      <button type="submit" id="submit-btn">
=======
        </div>
      </fieldset>
      <div className="file-upload">
        <label htmlFor="fileInput" className="file-label">
          {imgPreview ? (
            <img src={imgPreview} alt="Preview" className="file-preview" />
          ) : (
            <div className="file-placeholder">
              <div>📁+</div>
              <p>Upload Photo</p>
            </div>
          )}
        </label>
        <input type="file" name="image" id="fileInput" onChange={handleFileChange} hidden />
      </div>

      <button type="submit" className="submit-button" id="submit-btn">
>>>>>>> 3f6baba7c80e3e42ebae66a6fc0bbec585eca660
        Add Artifact
      </button>
    </form>
  )
}

export default FossilForm
