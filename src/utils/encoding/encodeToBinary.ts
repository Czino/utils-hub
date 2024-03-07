const BINARY = 2
export const encodeToBinary = (str: string) =>
  str
    .split('')
    .map((char) => char.charCodeAt(0).toString(BINARY))
    .join(' ')
