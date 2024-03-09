import { type Unit, type UnitType } from '../../../utils/unit/conversionMap'
import { getURLPath } from './getURLPath'

type Props = {
  type: UnitType
  unit1: Unit
  unit2: Unit
}
export const updateURLPath = (args: Props) => {
  window.history.replaceState(null, document.title, getURLPath(args))
}
