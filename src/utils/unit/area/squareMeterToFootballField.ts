import { ACRES_IN_FOOTBALL_FIELD } from './constants'
import { squareMeterToAcre } from './squareMeterToAcre'

export const squareMeterToFootballField = (m2: number) => squareMeterToAcre(m2) / ACRES_IN_FOOTBALL_FIELD
