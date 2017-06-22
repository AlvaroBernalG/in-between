const validAlphabetCharacters = '[a-z]|[A-Z]'

const check = {
  string(target){
    return target instanceof String || typeof target === 'string'
  },
  number(target){
    return typeof target === 'number'
  },
  date(target){
    return target instanceof Date
  }
}

const sameDataType = (...values) =>{
  const test = typeof values[0]
  return values.every(e => typeof e === test)
}


const inNumRange = (start, end) => target => target >= start && target <= end

const isValidAlphabetChar = char => !!char.match(validAlphabetCharacters)

const inCharRange = (start, end) => target =>{

  const values = [start, end, target] 

  if (values.every(e => e.length === 1) === false || 
      values.every(isValidAlphabetChar) === false ){

    throw new TypeError('Not a valid character.')
  }

  return inNumRange(start, end)(target)
}

const between = (start, end) => target =>{

  if (sameDataType(start, end, target) === false) {
    throw new TypeError('All arguments should be of the same data type.')
  }

  if(check.string(start)){
    return inCharRange(start, end)(target)
  }
  
  if(check.number(start) || check.date(start)){
   return inNumRange(start, end)(target)
  }

  throw new TypeError()
}   

module.exports = between

