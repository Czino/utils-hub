import { cubicMeterToCupUS } from './cubicMeterToCupUS'

describe('cubicMeterToCupUS', () => {
  it('should convert cubic meter to us cups', () => {
    expect(cubicMeterToCupUS(1)).toEqual(4166.667)
  })
})
