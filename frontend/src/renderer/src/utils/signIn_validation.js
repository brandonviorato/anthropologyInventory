const VALIDATORS = {
  email: validateEmail,
  password: validatePassword
}

export const validateInput = (field, input) => {
  let errors = {}
  const validate = VALIDATORS[field]
  const value = cleanInput(input)
  if (validate) validate(errors, value)
  return errors
}

function validateEmail(errors, input) {
  errors.email = isValidEmail(input) ? false : 'Email is invalid.'
}

function validatePassword(errors, input) {
  errors.password = isAlphanumeric(input) ? false : 'Password is incorrect.'
}

/**
 * Cleans up a string by trimming leading/trailing whitespace and replacing
 * multiple consecutive spaces with a single space.
 *
 * @param {string} input - The string to be cleaned.
 * @returns {string} - A cleaned version of the input string with extra spaces removed.
 *
 * @example
 * cleanInput("  Hello   World  ") // "Hello World"
 * cleanInput("  JavaScript  is  fun!  ") // "JavaScript is fun!"
 * cleanInput(" No extra spaces ") // "No extra spaces"
 * cleanInput("     ") // ""
 */
function cleanInput(input) {
  return input.trim().replace(/\s+/g, ' ')
}

/**
 * Checks if a given string contains only alphanumeric characters, spaces, dashes, or quotes.
 *
 * @param {string} input - The string to be checked.
 * @returns {boolean} - Returns `true` if the input is alphanumeric (with allowed characters), `false` otherwise.
 *
 * @example
 * isAlphanumeric("Hello World") // true
 * isAlphanumeric("Hello-World") // true
 * isAlphanumeric("12345") // true
 * isAlphanumeric("Hello@World") // false
 */
function isAlphanumeric(input) {
  if (input.length == 0) {
    return true
  }
  return /^[a-zA-Z0-9\s-]+$/.test(input)
}

function isValidEmail(input) {
  if (input.length == 0) {
    return true
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}
