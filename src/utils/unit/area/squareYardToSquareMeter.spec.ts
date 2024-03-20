import { squareYardToSquareMeter } from './squareYardToSquareMeter'

describe('squareYardToSquareMeter', () => {
  it('should convert square yard to square meter', () => {
    expect(squareYardToSquareMeter(1000)).toBeCloseTo(836.127, 3)
  })
})
