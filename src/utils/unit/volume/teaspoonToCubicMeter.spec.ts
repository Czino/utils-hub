import { teaspoonToCubicMeter } from './teaspoonToCubicMeter'

describe('teaspoonToCubicMeter', () => {
  it('should convert teaspoon to cubic meter', () => {
    expect(teaspoonToCubicMeter(100000)).toBeCloseTo(1.776, 3)
  })
})
