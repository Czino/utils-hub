import { pintToCubicMeter } from './pintToCubicMeter'

describe('pintToCubicMeter', () => {
  it('should convert pint to cubic meter', () => {
    expect(pintToCubicMeter(100000)).toBeCloseTo(56.826, 3)
  })
})
