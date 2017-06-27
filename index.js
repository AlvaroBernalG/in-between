const { some } = require('logical-operators')

const is = {
  alphabet: (target) => !!target.match('^[a-zA-Z]$'),

  number: (target) => typeof target === 'number',

  date: (target) => target instanceof Date
}

const inRange = (start, end, target) => target > start && target < end

const range = (start, end, target) => target >= start && target <= end

const between = (start, end, boundaries) => (target) => {
  const valid = some(is.date, is.number, is.alphabet)

  if ([start, end, target].every(valid)) {
    return boundaries ? range(start, end, target) : inRange(start, end, target)
  }

  throw new TypeError()
}

module.exports = between
