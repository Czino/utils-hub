import type { Unit, UnitType } from '../../../utils/unit/conversionMap'

export type Props = {
  type: UnitType
  unit1: Unit
  unit2: Unit
}
export const getURLPath = (args: Props) => `/utils/units/${args.type}-${args.unit1}-${args.unit2}`
