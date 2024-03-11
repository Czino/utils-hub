import { cubicMeterToCubicFoot } from './cubicMeterToCubicFoot'

describe('cubicMeterToCubicFoot', () => {
  it('should convert cubic meter to cubic feet', () => {
    expect(cubicMeterToCubicFoot(1)).toEqual(35.3147)
  })
})
