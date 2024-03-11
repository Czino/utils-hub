import { cupToCubicMeter } from './cupToCubicMeter'

describe('cupToCubicMeter', () => {
  it('should convert cup to cubic meter', () => {
    expect(cupToCubicMeter(1000)).toBeCloseTo(0.284, 3)
  })
})
