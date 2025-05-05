const VALIDATORS = {
  genus: validateGenus,
  species: validateSpecies,
  nickName: validateNickname,
  specimenId: validateSpecimenId,
  anthropologist: validateAnthropologist,
  regionFound: validateRegion,
  purchaser: validatePurchaser
}

/**
 * Validates a specific input field based on the provided field name and input value.
 * The function dynamically selects the appropriate validator for the field and runs the validation on the cleaned input.
 *
 * @param {string} field - The name of the field to validate (e.g., "genus", "species", "specimenId").
 * @param {string} input - The input value to be validated.
 * @returns {Object} - An object containing validation errors for the field, if any. If valid, the object will be empty.
 *
 * @example
 * validateInput("genus", "Homo") // {} (valid)
 * validateInput("genus", "Homo1") // { genus: false } (invalid)
 * validateInput("specimenId", "AL288-1") // {} (valid)
 * validateInput("specimenId", "AL288#1") // { specimenId: false } (invalid)
 */
export const validateInput = (field, input) => {
  let errors = {}
  const validate = VALIDATORS[field]
  const value = cleanInput(input)
  if (validate) validate(errors, value)
  return errors
}

/**
 * Validates the genus input to ensure it contains only alphabetic characters, spaces, dashes, or quotes.
 * If the input is invalid, sets the `errors.genus` to `false`.
 *
 * @param {Object} errors - An object to track validation errors.
 * @param {string} input - The genus input string to validate.
 * @returns {void}
 *
 * @example
 * validateGenus(errors, "Homo") // errors.genus remains true
 * validateGenus(errors, "Homo1") // errors.genus set to false
 */
function validateGenus(errors, input) {
  if (!isAlphabetic(input)) {
    errors.genus = false
  }
}

/**
 * Validates the species input to ensure it contains only alphabetic characters, spaces, dashes, or quotes.
 * If the input is invalid, sets the `errors.species` to `false`.
 *
 * @param {Object} errors - An object to track validation errors.
 * @param {string} input - The species input string to validate.
 * @returns {void}
 *
 * @example
 * validateSpecies(errors, "Sapiens") // errors.species remains true
 * validateSpecies(errors, "Sapiens1") // errors.species set to false
 */
function validateSpecies(errors, input) {
  if (!isAlphabetic(input)) {
    errors.species = false
  }
}

/**
 * Validates the nickname input to ensure it contains only alphabetic characters, spaces, dashes, or quotes.
 * If the input is invalid, sets the `errors.nickName` to `false`.
 *
 * @param {Object} errors - An object to track validation errors.
 * @param {string} input - The nickname input string to validate.
 * @returns {void}
 *
 * @example
 * validateNickname(errors, "Lucy") // errors.nickName remains true
 * validateNickname(errors, "Lucy1") // errors.nickName set to false
 */
function validateNickname(errors, input) {
  if (!isAlphabetic(input)) {
    errors.nickName = false
  }
}

/**
 * Validates the anthropologist input to ensure it contains only alphabetic characters, spaces, dashes, or quotes.
 * If the input is invalid, sets the `errors.anthropologist` to `false`.
 *
 * @param {Object} errors - An object to track validation errors.
 * @param {string} input - The anthropologist input string to validate.
 * @returns {void}
 *
 * @example
 * validateAnthropologist(errors, "Dr. Smith") // errors.anthropologist remains true
 * validateAnthropologist(errors, "Dr. Smith123") // errors.anthropologist set to false
 */
function validateAnthropologist(errors, input) {
  if (!isAlphabetic(input)) {
    errors.anthropologist = false
  }
}

/**
 * Validates the specimen ID input to ensure it contains only alphanumeric characters, spaces, dashes, or quotes.
 * If the input is invalid, sets the `errors.specimenId` to `false`.
 *
 * @param {Object} errors - An object to track validation errors.
 * @param {string} input - The specimen ID input string to validate.
 * @returns {void}
 *
 * @example
 * validateSpecimenId(errors, "AL288-1") // errors.specimenId remains true
 * validateSpecimenId(errors, "AL288#1") // errors.specimenId set to false
 */
function validateSpecimenId(errors, input) {
  if (!isAlphanumeric(input)) {
    errors.specimenId = false
  }
}

/**
 * Validates the region input to ensure it contains only alphabetic characters, spaces, dashes, or quotes.
 * If the input is invalid, sets the `errors.regionFound` to `false`.
 *
 * @param {Object} errors - An object to track validation errors.
 * @param {string} input - The region input string to validate.
 * @returns {void}
 *
 * @example
 * validateRegion(errors, "Afar Region") // errors.regionFound remains true
 * validateRegion(errors, "Afar@Region") // errors.regionFound set to false
 */
function validateRegion(errors, input) {
  if (!isAlphabetic(input)) {
    errors.regionFound = false
  }
}

/**
 * Validates the purchaser input to ensure it contains only alphabetic characters, spaces, dashes, or quotes.
 * If the input is invalid, sets the `errors.purchaser` to `false`.
 *
 * @param {Object} errors - An object to track validation errors.
 * @param {string} input - The purchaser input string to validate.
 * @returns {void}
 *
 * @example
 * validatePurchaser(errors, "John Doe") // errors.purchaser remains true
 * validatePurchaser(errors, "John@Doe") // errors.purchaser set to false
 */
function validatePurchaser(errors, input) {
  if (!isAlphabetic(input)) {
    errors.purchaser = false
  }
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
 * Checks if a given string contains only alphabetic characters, spaces, dashes, or quotes.
 * The function supports letters with accents and diacritics (e.g., é, ñ, ö).
 *
 * @param {string} input - The string to be checked.
 * @returns {boolean} - Returns `true` if the input contains only valid alphabetic characters (including accented characters), spaces, dashes, or quotes; `false` otherwise.
 *
 * @example
 * isAlphabetic("Hello World") // true
 * isAlphabetic("Côte d’Azur") // true
 * isAlphabetic("São Paulo") // true
 * isAlphabetic("Hello-World") // true
 * isAlphabetic("12345") // false
 * isAlphabetic("Hello@World") // false
 */
function isAlphabetic(input) {
  if (input.length == 0) {
    return true
  }
  return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s\-" "]+$/.test(input)
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
  return /^[a-zA-Z0-9\s\-" "]+$/.test(input)
}
