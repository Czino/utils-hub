import { hectaresToSquareMeter } from './hectaresToSquareMeter'

describe('hectaresToSquareMeter', () => {
  it('should convert acre to square meter', () => {
    expect(hectaresToSquareMeter(1)).toEqual(10000)
  })
})
