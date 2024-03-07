import { encodeString } from './encodeString'

describe('encodeString', () => {
  it('encodes string to encoding type', () => {
    expect(encodeString('test', 'base64')).toBe('dGVzdA==')
    expect(encodeString('test', 'hex')).toBe('74657374')
    expect(encodeString('test', 'binary')).toBe('1110100 1100101 1110011 1110100')
  })
})
