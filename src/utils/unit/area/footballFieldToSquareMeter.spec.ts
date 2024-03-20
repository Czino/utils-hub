import { footballFieldToSquareMeter } from './footballFieldToSquareMeter'

describe('footballFieldToSquareMeter', () => {
  it('should convert acre to square meter', () => {
    expect(footballFieldToSquareMeter(1)).toBeCloseTo(5341.8499, 3)
  })
})
