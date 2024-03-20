import { squareMeterToSquareInch } from './squareMeterToSquareInch'

describe('squareMeterToSquareInch', () => {
  it('should convert square meter to square inches', () => {
    expect(squareMeterToSquareInch(1)).toEqual(1550.003)
  })
})
