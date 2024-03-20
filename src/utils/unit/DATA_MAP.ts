import { BINARY } from '../encoding/constants'
import { round } from '../math/round'
import { PRECISION } from './conversionMap'

export const BYTE = 8

export const DATA_MAP = {
  bit: {
    bit: (bit: number) => bit,
    nibble: (bit: number) => round((bit / BYTE) * BINARY, PRECISION),
    byte: (bit: number) => round(bit / BYTE, PRECISION),
    KB: (bit: number) => round(bit / BYTE / BINARY ** 10, PRECISION),
    MB: (bit: number) => round(bit / BYTE / BINARY ** 20, PRECISION),
    GB: (bit: number) => round(bit / BYTE / BINARY ** 30, PRECISION),
    TB: (bit: number) => round(bit / BYTE / BINARY ** 40, PRECISION),
    PB: (bit: number) => round(bit / BYTE / BINARY ** 50, PRECISION),
    EB: (bit: number) => round(bit / BYTE / BINARY ** 60, PRECISION),
    ZB: (bit: number) => round(bit / BYTE / BINARY ** 70, PRECISION),
    YB: (bit: number) => round(bit / BYTE / BINARY ** 80, PRECISION),
  },
  nibble: { bit: (nibble: number) => (nibble * BYTE) / BINARY },
  byte: { bit: (byte: number) => byte * BYTE },
  KB: { bit: (KB: number) => KB * BYTE * BINARY ** 10 },
  MB: { bit: (MB: number) => MB * BYTE * BINARY ** 20 },
  GB: { bit: (GB: number) => GB * BYTE * BINARY ** 30 },
  TB: { bit: (TB: number) => TB * BYTE * BINARY ** 40 },
  PB: { bit: (PB: number) => PB * BYTE * BINARY ** 50 },
  EB: { bit: (EB: number) => EB * BYTE * BINARY ** 60 },
  ZB: { bit: (ZB: number) => ZB * BYTE * BINARY ** 70 },
  YB: { bit: (YB: number) => YB * BYTE * BINARY ** 80 },
}
