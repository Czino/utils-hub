import { tablespoonToCubicMeter } from './tablespoonToCubicMeter'

describe('tablespoonToCubicMeter', () => {
  it('should convert tablespoon to cubic meter', () => {
    expect(tablespoonToCubicMeter(100000)).toBeCloseTo(1.776, 3)
  })
})
