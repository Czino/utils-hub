import { gallonToCubicMeter } from './gallonToCubicMeter'

describe('gallonToCubicMeter', () => {
  it('should convert us gallon to cubic meter', () => {
    expect(gallonToCubicMeter(100000)).toBeCloseTo(454.61, 3)
  })
})
