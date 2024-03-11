import { decodeFromBinary } from './decodeFromBinary'

describe('decodeFromBinary', () => {
  it('encodes string to binary', () => {
    expect(decodeFromBinary('1110100 1100101 1110011 1110100')).toBe('test')
  })
})
