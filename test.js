const between = require('./index.js')

describe('between()', () => {
  test('should be a higher order function',
  () => {
    const fn = between(100, 1000)

    expect(typeof fn === 'function').toBe(true)
  })

  test('should return true if target number is between ranges',
    () => {
      const isBetween1And10 = between(1, 10)

      let target = 5

      expect(isBetween1And10(target)).toBe(true)

      target = 10

      expect(isBetween1And10(target)).toBe(false)

      target = 1

      expect(isBetween1And10(target)).toBe(false)

      target = 11

      expect(isBetween1And10(target)).toBe(false)

      target = 0

      expect(isBetween1And10(target)).toBe(false)

      target = 2.2

      expect(isBetween1And10(target)).toBe(true)

      target = 2

      expect(between(-Infinity, Infinity)(target)).toBe(true)

      expect(between(3, 4, true)(4)).toBe(true)
    })

  test('should return true if target number is one of the boundaries.', () => {
    expect(between(3, 4, true)(4)).toBe(true)

    expect(between(3, 4, true)(3)).toBe(true)
  })

  test('should return true if target alphabet string is between ranges. ', () => {
    let target = 'd'

    expect(between('a', 'z')(target)).toBe(true)

    target = 'a'

    expect(between('a', 'z')(target)).toBe(false)

    target = 'z'

    expect(between('a', 'z')(target)).toBe(false)

    target = 'z'

    expect(between('a', 'b')(target)).toBe(false)

    target = 'c'

    expect(between('a', 'b')(target)).toBe(false)

    target = 'C'

    expect(between('a', 'b')(target)).toBe(false)

    target = 'b'

    expect(between('A', 'z')(target)).toBe(true)
  })

  test('should return true if target alphabet string is one of the ranges. ',
    () => {
      expect(between('a', 'b', true)('b')).toBe(true)

      expect(between('a', 'b', true)('a')).toBe(true)
    })

  test('should return true if target Date is between ranges',
    () => {
      let myGraduation = new Date('October 13, 2014 11:13:00')

      let myFirstJob = new Date('September 1, 2015 11:13:00')

      let myBirthday = new Date('January 10, 2015 10:11:03')

      expect(between(myGraduation, myFirstJob)(myBirthday)).toBe(true)
    })

  test('should return true if target Date is one of the boundaries.',
    () => {
      let myGraduation = new Date('October 13, 2014 11:13:00')

      let myFirstJob = new Date('September 1, 2015 11:13:00')

      let myBirthday = new Date('September 1, 2015 11:13:00')

      expect(between(myGraduation, myFirstJob, true)(myBirthday)).toBe(true)
    })

  test('should throw error if args are not a valid an alphabet character', () => {
    expect(() => {
      between('#', '/')('%')
    }).toThrow()

    expect(() => {
      between('💩', '💩')('💩')
    }).toThrow()
    expect(() => {
      between(-Infinity, '💩')('💩')
    }).toThrow()
  })

  test('should throw error if args are not of the same type', () => {

    expect(() => {
      between(1, 10)('s')
    }).toThrow()

    expect(() => {
      between(1, '3')(2)
    }).toThrow()

    expect(() => {
      between(new Date(), 2)(2)
    }).toThrow()

  })

  test('should throw error if args are not numbers, strings or Dates',
    () => {
      expect(() => {
        between(null, null)(null)
      }).toThrow()

      expect(() => {
        between(undefined, undefined)(undefined)
      }).toThrow()

      expect(() => {
        between({}, {})({})
      }).toThrow()
    })
})
