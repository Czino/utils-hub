import { cubicMeterToTablespoon } from './cubicMeterToTablespoon'

describe('cubicMeterToTablespoon', () => {
  it('should convert cubic meter to tablespoon', () => {
    expect(cubicMeterToTablespoon(1)).toEqual(56312.13)
  })
})
