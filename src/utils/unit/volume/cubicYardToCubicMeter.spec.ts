import { cubicYardToCubicMeter } from './cubicYardToCubicMeter'

describe('cubicYardToCubicMeter', () => {
  it('should convert yard to cubic meter', () => {
    expect(cubicYardToCubicMeter(1000)).toBeCloseTo(764.555, 3)
  })
})
