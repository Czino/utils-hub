import { BINARY } from './constants'

export const decodeFromBinary = (string: string) =>
  string
    .split(' ')
    .map((binary) => String.fromCharCode(parseInt(binary, BINARY)))
    .join('')
