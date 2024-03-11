import { cubicMeterToDrop } from './cubicMeterToDrop'

describe('cubicMeterToDrop', () => {
  it('should convert cubic meter to drops', () => {
    expect(cubicMeterToDrop(1)).toEqual(20000000)
  })
})
