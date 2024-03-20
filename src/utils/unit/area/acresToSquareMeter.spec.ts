import { acresToSquareMeter } from './acresToSquareMeter'

describe('acresToSquareMeter', () => {
  it('should convert acre to square meter', () => {
    expect(acresToSquareMeter(1)).toEqual(4046.856)
  })
})
