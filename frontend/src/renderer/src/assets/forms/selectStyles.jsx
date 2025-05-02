export const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: '1px solid transparent',
      borderRadius: 6,
      fontSize: 14,
      boxShadow: 'none',
      ':hover': {
        cursor: 'text',
        border: '1px solid #759ffc',
        boxShadow: '0px 0px 5px 1px #759ffc'
      },
      ':active': {
        border: '1px solid #759ffc',
        boxShadow: '0px 0px 5px 1px #759ffc'
      }
    }),
    option: (styles, state) => ({
      ...styles,
      ':hover' : {
        cursor: 'pointer'
      }
    })
  }