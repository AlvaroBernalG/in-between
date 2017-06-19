
const between = require('./index.js')


describe('between()', ()=>{

  test('should be a higher order function.', 
  ()=>{

    const fn = between(100, 1000) 

    expect(typeof fn === 'function').toBe(true)

  })

  test('should return true if target number is between ranges.',
    ()=>{

    const isBetween1And10 = between(1, 10)

    let target = 5

    expect(isBetween1And10(target)).toBe(true)

    target = 10
    
    expect(isBetween1And10(target)).toBe(true)

    target = 1
    
    expect(isBetween1And10(target)).toBe(true)

    target = 11
    
    expect(isBetween1And10(target)).toBe(false)

    target = 0

    expect(isBetween1And10(target)).toBe(false)

    target = 343242

    expect(between(-Infinity, Infinity)(target)).toBe(true)

    target = Infinity

    expect(between(-Infinity, Infinity)(target)).toBe(true)


  })

  test('should return true if target string is between ranges. ', ()=>{

    let target = 'd'

    expect(between('a', 'z')(target)).toBe(true)   

    target = 'a'

    expect(between('a', 'z')(target)).toBe(true)   

    target = 'z'

    expect(between('a', 'z')(target)).toBe(true)   

    target = 'z'

    expect(between('a', 'b')(target)).toBe(false)   

    target = 'c'

    expect(between('a', 'b')(target)).toBe(false)   

  })

  test('should throw error if args is not a valid an alphabet character', ()=>{

      expect(()=>{
        between('#', '/')('%')
      }).toThrow()

  })

  test('should throw error if args are not of the same type', ()=>{

      expect(()=>{
        between(1, 10)('sd')
      }).toThrow()

      expect(()=>{
        between(1, '3')(32)
      }).toThrow()

  })

  test('should throw error if args are not number or char', ()=>{

      expect(()=>{
        between('as', 'z')('s')
      }).toThrow()

      expect(()=>{
        between('as', undefined)('s')
      }).toThrow()

  })
})
