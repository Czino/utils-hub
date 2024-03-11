import { cubicMeterToGallonUS } from './cubicMeterToGallonUS'

describe('cubicMeterToGallonUS', () => {
  it('should convert cubic meter to us gallon', () => {
    expect(cubicMeterToGallonUS(1)).toEqual(264.172)
  })
})
