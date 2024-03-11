import { cubicMeterToCup } from './cubicMeterToCup'

describe('cubicMeterToCup', () => {
  it('should convert cubic meter to cups', () => {
    expect(cubicMeterToCup(1)).toEqual(3519.508)
  })
})
