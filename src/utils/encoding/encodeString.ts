import { Buffer } from 'buffer'
import { encodings } from '../../screens/EncodingUtils'
import { encodeToBinary } from './encodeToBinary'

export const encodeString = (str: string, encoding: (typeof encodings)[number]) => {
  if (encoding === 'binary') return encodeToBinary(str)
  return Buffer.from(str, 'utf8').toString(encoding)
}
