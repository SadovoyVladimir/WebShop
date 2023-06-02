export function validator(data, config) {
  const errors = {}
  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired': {
        if (typeof data === 'boolean' || typeof data === 'number') {
          statusValidate = !data
        } else if (Array.isArray(data)) {
          statusValidate = !data.length
        } else if (typeof data === 'object') {
          statusValidate = false
        } else {
          statusValidate = data.trim() === ''
        }
        break
      }
      case 'isCategory': {
        if (typeof data === 'object') {
          statusValidate = !data.name.length || !data.imageInfo.length
        } else {
          statusValidate = false
        }
        break
      }
      case 'startWithCapitalLetter': {
        const capitalRegExp = /^[A-ZА-Я]+/g
        statusValidate = !capitalRegExp.test(data)
        break
      }
      case 'startWithLetter': {
        const capitalRegExp = /^[A-Za-zА-Яа-я]+/g
        statusValidate = !capitalRegExp.test(data)
        break
      }
      case 'maxPrice': {
        if (data > 1000000000) statusValidate = data
        break
      }
      case 'minPrice': {
        if (data < 0) statusValidate = data
        break
      }
      case 'isEmail': {
        const emailRegExp = /^\S+@\S+\.\S+$/g
        statusValidate = !emailRegExp.test(data)
        break
      }
      case 'isCapitalSymbol': {
        const capitalRegExp = /[A-Z]+/g
        statusValidate = !capitalRegExp.test(data)
        break
      }
      case 'isContainDigit': {
        const digitRegExp = /\d+/g
        statusValidate = !digitRegExp.test(data)
        break
      }
      case 'min': {
        statusValidate = data.length < config.value
        break
      }
      case 'max': {
        statusValidate = data.length > config.value
        break
      }
      default:
        break
    }
    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
