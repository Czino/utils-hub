import { dropToCubicMeter } from './dropToCubicMeter'

describe('dropToCubicMeter', () => {
  it('should convert drop to cubic meter', () => {
    expect(dropToCubicMeter(100000000)).toBeCloseTo(5, 3)
  })
})
