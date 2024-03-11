import { cubicFootToCubicMeter } from './cubicFootToCubicMeter'

describe('cubicFootToCubicMeter', () => {
  it('should convert cubic feet to cubic meter', () => {
    expect(cubicFootToCubicMeter(1000)).toBeCloseTo(28.317, 3)
  })
})
