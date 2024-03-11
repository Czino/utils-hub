import { cubicMeterToTablespoonUS } from './cubicMeterToTablespoonUS'

describe('cubicMeterToTablespoonUS', () => {
  it('should convert cubic meter to us tablespoon', () => {
    expect(cubicMeterToTablespoonUS(1)).toEqual(67628)
  })
})
