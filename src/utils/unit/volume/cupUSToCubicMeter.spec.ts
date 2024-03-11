import { cupUSToCubicMeter } from './cupUSToCubicMeter'

describe('cupUSToCubicMeter', () => {
  it('should convert us cup to cubic meter', () => {
    expect(cupUSToCubicMeter(1000)).toBeCloseTo(0.24, 3)
  })
})
