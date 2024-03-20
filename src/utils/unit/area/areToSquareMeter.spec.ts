import { areToSquareMeter } from './areToSquareMeter'

describe('areToSquareMeter', () => {
  it('should convert acre to square meter', () => {
    expect(areToSquareMeter(1)).toEqual(100)
  })
})
