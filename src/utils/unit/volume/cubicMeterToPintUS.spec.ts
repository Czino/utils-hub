import { cubicMeterToPintUS } from './cubicMeterToPintUS'

describe('cubicMeterToPintUS', () => {
  it('should convert cubic meter to us pint', () => {
    expect(cubicMeterToPintUS(1)).toEqual(2113.376)
  })
})
