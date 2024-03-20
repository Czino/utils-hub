import { squareMeterToFootballField } from './squareMeterToFootballField'

describe('squareMeterToFootballField', () => {
  it('should convert square meter to football fields', () => {
    expect(squareMeterToFootballField(1000)).toBeCloseTo(0.1872, 3)
  })
})
