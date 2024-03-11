import { cubicMeterToCubicInch } from './cubicMeterToCubicInch'

describe('cubicMeterToCubicInch', () => {
  it('should convert cubic meter to cubic inches', () => {
    expect(cubicMeterToCubicInch(1)).toEqual(61023.7)
  })
})
