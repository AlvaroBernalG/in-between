
const between = require('./index.js')


describe('between()', ()=>{

  test('should be a higher order function.', 
  ()=>{

    const fn = between(100, 1000) 

    expect(typeof fn === 'function').toBe(true)

  })

  test('should return true if target is between ranges.',
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


  test('should throw error if non numeric values are passed', ()=>{

      expect(()=>{
        between(1, 10)('sd')
      }).toThrow()

      expect(()=>{
        between(1, '')(32)
      }).toThrow()
  })

})
