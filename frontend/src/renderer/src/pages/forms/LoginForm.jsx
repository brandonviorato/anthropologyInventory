import FormFieldset from '../../components/form-components/FormFieldset'
import FormInput from '../../components/form-components/FormInput'
import { useState } from 'react'
import { validateInput } from '../../utils/signIn_validation'

export default function LoginForm() {
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setFormData({ ...formData, [name]: value })
    setTouched({ ...touched, [name]: value })

    const input = validateInput(name, value)
    setErrors({ ...errors, [name]: input[name] || '' })
  }

  return (
    <form id="login-form" autoComplete="on">
      <FormFieldset
        fieldsetID="login-fields"
        title="Login"
        fields={[
          <FormInput
            key="email"
            label="Email"
            inputType="text"
            inputName="email"
            placeholderTxt="GRC email address"
            isRequired={true}
            changeFunc={handleChange}
            inputClass={formData.email === '' ? '' : errors.email ? 'invalid' : 'valid'}
            validationErr={errors.email}
            hasTooltip={true}
            tooltipTxt={'Your GRC staff email.'}
          ></FormInput>,
          <FormInput
            key="password"
            label="Password"
            inputType="text"
            inputName="password"
            isRequired={true}
            changeFunc={handleChange}
            inputClass={formData.password === '' ? '' : errors.password ? 'invalid' : 'valid'}
            validationErr={errors.password}
          ></FormInput>
        ]}
      />
      <button key="submit" id="login-btn">
        Login
      </button>
    </form>
  )
}
