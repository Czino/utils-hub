import { cubicMeterToGallon } from './cubicMeterToGallon'

describe('cubicMeterToGallon', () => {
  it('should convert cubic meter to gallon', () => {
    expect(cubicMeterToGallon(1)).toEqual(219.969)
  })
})
