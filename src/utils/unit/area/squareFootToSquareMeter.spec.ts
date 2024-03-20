import { squareFootToSquareMeter } from './squareFootToSquareMeter'

describe('squareFootToSquareMeter', () => {
  it('should convert square feet to square meter', () => {
    expect(squareFootToSquareMeter(1000)).toBeCloseTo(92.903, 3)
  })
})
