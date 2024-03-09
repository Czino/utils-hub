import { type Unit, type UnitType } from '../../../utils/unit/conversionMap'
import { getURLPath } from './getURLPath'

type Props = {
  type: UnitType
  unit1: Unit
  unit2: Unit
  value1: number
  value2: number
}
export const updateURLPath = (args: Props) => {
  window.history.replaceState(null, document.title, getURLPath(args))
  window.location.hash = [`value1=${args.value1}`, `value2=${args.value2}`].join('&')
}
