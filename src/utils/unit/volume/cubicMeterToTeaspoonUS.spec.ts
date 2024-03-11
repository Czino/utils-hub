import { cubicMeterToTeaspoonUS } from './cubicMeterToTeaspoonUS'

describe('cubicMeterToTeaspoonUS', () => {
  it('should convert cubic meter to us teaspoon', () => {
    expect(cubicMeterToTeaspoonUS(1)).toEqual(202884)
  })
})
