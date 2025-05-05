import PropTypes from 'prop-types'
import FormFieldset from '../FormFieldset'
import FormInput from '../FormInput'

function PurchaseInfo({
  dateData,
  purchaserData,
  purchaserErrors,
  paidData,
  currentValData,
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
          inputClass={!purchaserErrors && purchaserData != '' ? 'valid' : ''}
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
          // hint={"Amount paid for the specimen (exlude '$' symbol)."}
          hint={"Numeric value only -- exclude '$' symbol."}
        />,
        <FormInput
          key={'currentValue'}
          label={'Current Value (optional)'}
          inputType={'number'}
          inputName={'activeValue'}
          placeholderTxt={'e.g. 250.00'}
          isRequired={false}
          value={currentValData}
          changeFunc={changeFunction}
          // hint={'Current value of the specimen (exlude \'$\' symbol).'}
          hint={"Numeric value only -- exclude '$' symbol."}
        />
      ]}
    />
  )
}

PurchaseInfo.propTypes = {
  dateData: PropTypes.date,
  purchaserData: PropTypes.string,
  purchaserErrors: PropTypes.any,
  paidData: PropTypes.number,
  currentValData: PropTypes.number,
  changeFunction: PropTypes.func
}

export default PurchaseInfo
