import { tablespoonUSToCubicMeter } from './tablespoonUSToCubicMeter'

describe('tablespoonUSToCubicMeter', () => {
  it('should convert us tablespoon to cubic meter', () => {
    expect(tablespoonUSToCubicMeter(100000)).toBeCloseTo(1.479, 3)
  })
})
