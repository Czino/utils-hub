import { pintUSToCubicMeter } from './pintUSToCubicMeter'

describe('pintUSToCubicMeter', () => {
  it('should convert us pint to cubic meter', () => {
    expect(pintUSToCubicMeter(100000)).toBeCloseTo(47.318, 3)
  })
})
