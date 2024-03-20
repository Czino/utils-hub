import { squareMeterToSquareFoot } from './squareMeterToSquareFoot'

describe('squareMeterToSquareFoot', () => {
  it('should convert square meter to square feet', () => {
    expect(squareMeterToSquareFoot(1)).toEqual(10.76391)
  })
})
