import { cubicInchToCubicMeter } from './cubicInchToCubicMeter'

describe('cubicInchToCubicMeter', () => {
  it('should convert cubic inch to cubic meter', () => {
    expect(cubicInchToCubicMeter(1000)).toBeCloseTo(0.0164, 3)
  })
})
