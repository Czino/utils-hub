import { squareMeterToHectare } from './squareMeterToHectare'

describe('squareMeterToHectare', () => {
  it('should convert square meter to hectare', () => {
    expect(squareMeterToHectare(1000)).toBeCloseTo(0.1, 3)
  })
})
