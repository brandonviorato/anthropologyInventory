import PropTypes from 'prop-types'
import FormFieldset from '../FormFieldset'
import FormInput from '../FormInput'

function PurchaseInfo({
  dateData,
  dateErrors,
  purchaserData,
  purchaserErrors,
  paidData,
  paidErrors,
  activeValData,
  activeValErrors,
  changeFunction
}) {
  return (
    <FormFieldset
      fieldsetID={'purchase-info'}
      title={'Acquisition Information'}
      fields={[
        <FormInput
          key={'dateOfPurchase'}
          label={'Date of Purchase (optional)'}
          inputType={'date'}
          inputName={'dateOfPurchase'}
          isRequired={false}
          inputValue={dateData}
          changeFunc={changeFunction}
          inputClass={dateData === '' ? '' : dateErrors ? 'invalid' : 'valid'}
          validationErr={dateErrors}
        />,
        <FormInput
          key={'purchaser'}
          label={'Purchaser (optional)'}
          inputType={'text'}
          inputName={'purchaser'}
          placeholderTxt={'e.g. Madeleine Tessandori'}
          isRequired={false}
          inputValue={purchaserData}
          changeFunc={changeFunction}
          inputClass={purchaserData === '' ? '' : purchaserErrors ? 'invalid' : 'valid'}
          validationErr={purchaserErrors}
        />,
        <FormInput
          key={'paidValue'}
          label={'Cost (optional)'}
          inputType={'number'}
          inputName={'paidValue'}
          placeholderTxt={'e.g. 250.00'}
          isRequired={false}
          value={paidData}
          changeFunc={changeFunction}
          inputClass={paidData === 0 ? '' : paidErrors ? 'invalid' : 'valid'}
          hint={"Numeric value only -- exclude '$' symbol."}
          validationErr={paidErrors}
        />,
        <FormInput
          key={'currentValue'}
          label={'Current Value (optional)'}
          inputType={'number'}
          inputName={'activeValue'}
          placeholderTxt={'e.g. 250.00'}
          isRequired={false}
          value={activeValData}
          changeFunc={changeFunction}
          inputClass={activeValData === 0 ? '' : activeValErrors ? 'invalid' : 'valid'}
          hint={"Numeric value only -- exclude '$' symbol."}
          validationErr={activeValErrors}
        />
      ]}
    />
  )
}

PurchaseInfo.propTypes = {
  dateData: PropTypes.string,
  dateErrors: PropTypes.any,
  purchaserData: PropTypes.string,
  purchaserErrors: PropTypes.any,
  paidData: PropTypes.number,
  paidErrors: PropTypes.any,
  activeValData: PropTypes.number,
  activeValErrors: PropTypes.any,
  changeFunction: PropTypes.func
}

export default PurchaseInfo
