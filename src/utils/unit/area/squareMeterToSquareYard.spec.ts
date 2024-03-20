import { squareMeterToSquareYard } from './squareMeterToSquareYard'

describe('squareMeterToSquareYard', () => {
  it('should convert square meter to square yards', () => {
    expect(squareMeterToSquareYard(1)).toEqual(1.19599)
  })
})
