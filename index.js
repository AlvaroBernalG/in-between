
const sameDataType = (...values) =>{
  let test = typeof values[0]
  return values.every(e => typeof e === test)
}

const inNumRange = (start, end) => target => target >= start && target <= end

const isString = target => typeof target === 'string' || target instanceof String

const isChar = str => str.length === 1

const isValidAlphabetChar = char => !!char.match('[a-z]|[A-Z]')

const inCharRange = (start, end) => target =>{

  let values = [start, end, target] 

  if (values.every(isChar) === false || 
      values.every(isValidAlphabetChar) === false ){

    throw new TypeError('Not a valid character.')
  }

  return inNumRange(start, end)(target)
}

module.exports = (start, end) => target =>{

  if (sameDataType(start, end, target) === false) {
    throw new TypeError('All arguments should be of the same data type.')
  }

  const numRange = inNumRange(start, end)

  const charRange = inCharRange(start, end)

  return isString(start) ? charRange(target): numRange(target)
}   
