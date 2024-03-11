import { ABSOLUTE_ZERO_ºC, K_TO_ºD_OFFSET, K_TO_ºD_SCALE } from './constants'

export const kelvinToDelisle = (K: number) => (K + ABSOLUTE_ZERO_ºC) * K_TO_ºD_SCALE - K_TO_ºD_OFFSET
