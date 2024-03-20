import { squareMeterToAcre } from './squareMeterToAcre'

describe('squareMeterToAcre', () => {
  it('should convert square meter to acre', () => {
    expect(squareMeterToAcre(1000)).toBeCloseTo(0.2471, 3)
  })
})
