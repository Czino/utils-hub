import { squareMeterToAre } from './squareMeterToAre'

describe('squareMeterToAre', () => {
  it('should convert square meter to are', () => {
    expect(squareMeterToAre(1000)).toBeCloseTo(10, 3)
  })
})
