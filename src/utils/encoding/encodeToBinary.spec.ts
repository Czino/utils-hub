import { encodeToBinary } from './encodeToBinary'

describe('encodeToBinary', () => {
  it('encodes string to binary', () => {
    expect(encodeToBinary('test')).toBe('1110100 1100101 1110011 1110100')
  })
})
