import { gallonUSToCubicMeter } from './gallonUSToCubicMeter'

describe('gallonUSToCubicMeter', () => {
  it('should convert us gallon to cubic meter', () => {
    expect(gallonUSToCubicMeter(100000)).toBeCloseTo(378.541, 3)
  })
})
