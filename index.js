const validAlphabetCharacters = '[a-z]|[A-Z]'

const is = {
  alphabetCharacter(target){
    return !!target.match(validAlphabetCharacters)
  },
  string(target){
    return target instanceof String || typeof target === 'string'
  },
  number(target){
    return typeof target === 'number'
  },
  date(target){
    return target instanceof Date
  },
  singleChar(target){
    return target.length === 1
  }
}

const all = (...validation) => (target)=> validation.reduce((prev,next) => prev && next(target) , validation[0](target))

const or = (first, second) => (target)=> first(target) || second(target)

const inRange = (start, end, target) => target > start && target < end

const between = (start, end) => (target) =>{

  const args = [start, end, target]

  const string_alphabet_singleChar = all(is.string, is.alphabetCharacter, is.singleChar )

  if(args.every(string_alphabet_singleChar)){
     return inRange(start, end, target)
  }

  const dateOrNumber = or(is.date, is.number)

  if(args.every(dateOrNumber)){
    return inRange(start, end, target)
  }

  throw new TypeError()
}   

module.exports = between

