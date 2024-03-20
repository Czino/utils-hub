import { acresToSquareMeter } from './acresToSquareMeter'
import { ACRES_IN_FOOTBALL_FIELD } from './constants'

export const footballFieldToSquareMeter = (ff: number) => acresToSquareMeter(ff * ACRES_IN_FOOTBALL_FIELD)
