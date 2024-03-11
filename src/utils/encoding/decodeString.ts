import { Buffer } from 'buffer'
import { encodings } from '../../screens/EncodingUtils'
import { decodeFromBinary } from './decodeFromBinary'

export const decodeString = (str: string, encoding: (typeof encodings)[number]) => {
  if (encoding === 'binary') return decodeFromBinary(str)
  return Buffer.from(str, encoding).toString('utf8')
}
