import { decodeString } from './decodeString'

describe('decodeString', () => {
  it('encodes string to encoding type', () => {
    expect(decodeString('dGVzdA==', 'base64')).toBe('test')
    expect(decodeString('74657374', 'hex')).toBe('test')
    expect(decodeString('1110100 1100101 1110011 1110100', 'binary')).toBe('test')
  })
})
