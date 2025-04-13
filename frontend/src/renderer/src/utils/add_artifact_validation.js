const VALIDATORS = {
  genus: validateGenus,
  species: validateSpecies,
  specimenId: validateSpecimenId,
  anthropologist: validateAnthropologist
}

export const validateInput = (field, input) => {
  let errors = {}
  const validate = VALIDATORS[field]
  if (validate) validate(errors, input)
  return errors
}

function validateGenus(errors, input) {
  if (!isAlphabetic(input)) {
    errors.genus = false
  }
}

function validateSpecies(errors, input) {
  if (!isAlphabetic(input)) {
    errors.species = false
  }
}

function validateAnthropologist(errors, input) {
  if (!isAlphabetic(input)) {
    errors.anthropologist = false
  }
}

function validateSpecimenId(errors, input) {
  if (!isAlphanumeric(input)) {
    errors.specimenId = false
  }
}

function isAlphabetic(input) {
  if (input.length == 0) {
    return true
  }
  return /^[a-zA-Z" "]+$/.test(input)
}

function isAlphanumeric(input) {
  if (input.length == 0) {
    return true
  }
  return /^[a-zA-Z0-9-]+$/.test(input)
}
