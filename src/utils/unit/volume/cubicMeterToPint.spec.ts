import { cubicMeterToPint } from './cubicMeterToPint'

describe('cubicMeterToPint', () => {
  it('should convert cubic meter to pint', () => {
    expect(cubicMeterToPint(1)).toEqual(1759.754)
  })
})
