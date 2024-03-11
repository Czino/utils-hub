import { cubicMeterToTeaspoon } from './cubicMeterToTeaspoon'

describe('cubicMeterToTeaspoon', () => {
  it('should convert cubic meter to teaspoon', () => {
    expect(cubicMeterToTeaspoon(1)).toEqual(56312.1)
  })
})
