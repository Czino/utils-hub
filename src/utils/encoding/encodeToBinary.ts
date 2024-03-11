import { BINARY } from './constants'

export const encodeToBinary = (str: string) =>
  str
    .split('')
    .map((char) => char.charCodeAt(0).toString(BINARY))
    .join(' ')
