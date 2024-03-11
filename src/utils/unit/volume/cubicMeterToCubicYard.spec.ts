import { cubicMeterToCubicYard } from './cubicMeterToCubicYard'

describe('cubicMeterToCubicYard', () => {
  it('should convert cubic meter to cubic yards', () => {
    expect(cubicMeterToCubicYard(1)).toEqual(1.307951)
  })
})
