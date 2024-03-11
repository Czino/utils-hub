import { teaspoonUSToCubicMeter } from './teaspoonUSToCubicMeter'

describe('teaspoonUSToCubicMeter', () => {
  it('should convert us teaspoon to cubic meter', () => {
    expect(teaspoonUSToCubicMeter(100000)).toBeCloseTo(0.493, 3)
  })
})
