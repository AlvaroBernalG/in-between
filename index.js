const { some } = require('logical-operators')

const validAlphabetCharacters = '^[a-z]$|^[A-Z]$'

const is = {
  alphabet: (target) => !!target.match(validAlphabetCharacters),

  number: (target) => typeof target === 'number',

  date: (target) => target instanceof Date
}

const inRange = (start, end, target) => target > start && target < end

const between = (start, end) => (target) => {
  const valid = some(is.date, is.number, is.alphabet)

  if ([start, end, target].every(valid)) {
    return inRange(start, end, target)
  }

  throw new TypeError()
}

module.exports = between
