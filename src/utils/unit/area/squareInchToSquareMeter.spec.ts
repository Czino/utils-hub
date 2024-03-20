import { squareInchToSquareMeter } from './squareInchToSquareMeter'

describe('squareInchToSquareMeter', () => {
  it('should convert square inch to square meter', () => {
    expect(squareInchToSquareMeter(1000)).toBeCloseTo(0.6452, 3)
  })
})
