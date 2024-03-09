import { useState, type Dispatch, type SetStateAction } from 'react'
import { FiShuffle } from 'react-icons/fi'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import en from '../../../i18n/en'
import { i18n } from '../../../i18n/i18n'
import { keys } from '../../../utils/object/keys'
import { TYPES, conversionMap, type Unit, type UnitType } from '../../../utils/unit/conversionMap'

type Props = {
  type: UnitType
  unit1: Unit
  unit2: Unit
}
const updateURLPath = (args: Props) => {
  window.history.replaceState(null, document.title, `/utils/units/${args.type}-${args.unit1}-${args.unit2}`)
}
const getUnitWithName = (unit: Unit) => `${unit} (${i18n(en.units[`${unit}.name`])})`
type UnitConverterProps = {
  type: UnitType
  setType: Dispatch<SetStateAction<UnitType>>
  unit1: Unit
  setUnit1: Dispatch<SetStateAction<Unit>>
  unit2: Unit
  setUnit2: Dispatch<SetStateAction<Unit>>
}
export const UnitConverter = ({ type, setType, unit1, setUnit1, unit2, setUnit2 }: UnitConverterProps) => {
  const converters = conversionMap[type]
  const units = keys(converters)
  // @ts-ignore unit should be a key of converters
  const fromUnit1 = converters[unit1]
  // @ts-ignore unit should be a key of converters
  const fromUnit2 = converters[unit2]

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(fromUnit1[unit2](value1))

  const updateType = (t: UnitType) => {
    const newUnits = keys(conversionMap[t])
    if (!units[0] || !units[1]) return
    setType(t)
    // @ts-ignore unit should be a key of converter
    setUnit1(newUnits[0])
    // @ts-ignore unit should be a key of converter
    setUnit2(newUnits[1])
    // @ts-ignore unit should be a key of converter
    setValue2(conversionMap[t][newUnits[0]][newUnits[1]](value1))
    // @ts-ignore unit should be a key of converter
    updateURLPath({ type: t, unit1: newUnits[0], unit2: newUnits[1] })
  }
  const updateUnit1 = (unit: Unit) => {
    setUnit1(unit)
    setValue1(fromUnit2[unit](value2))
    updateURLPath({ type, unit1: unit, unit2 })
  }
  const updateUnit2 = (unit: Unit) => {
    setUnit2(unit)
    setValue2(fromUnit1[unit](value1))
    updateURLPath({ type, unit1, unit2: unit })
  }
  const updateValue1 = (value: number) => {
    setValue1(value)
    setValue2(fromUnit1[unit2](value))
  }
  const updateValue2 = (value: number) => {
    setValue2(value)
    setValue1(fromUnit2[unit1](value))
  }
  const swapUnits = () => {
    setValue1(value2)
    setValue2(value1)
    setUnit1(unit2)
    setUnit2(unit1)
  }

  return (
    <>
      <div className="w-[180px]">
        <Select
          aria-label={i18n(en.units.selectUnitType)}
          value={type}
          onChange={(value) => updateType(value as UnitType)}
        >
          {TYPES.map((t) => (
            <option key={t} value={t}>
              {i18n(en.units[t])}
            </option>
          ))}
        </Select>
      </div>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
        <Input
          type="number"
          aria-label={i18n(en.units.inputUnit, { unit: unit1 })}
          value={value1}
          onChange={(e) => updateValue1(Number(e.currentTarget.value))}
        />
        <div className="col-span-2">
          <Select
            aria-label={i18n(en.units.selectUnit1)}
            value={unit1}
            onChange={(value) => updateUnit1(value as Unit)}
          >
            {keys(conversionMap[type]).map((unit) => (
              <option key={unit} value={unit}>
                {getUnitWithName(unit)}
              </option>
            ))}
          </Select>
        </div>
        <div
          className="grid col-span-4 justify-center items-center md:col-span-1"
          onClick={swapUnits}
          aria-label={i18n(en.units.swapUnits)}
        >
          <FiShuffle />
        </div>
        <Input
          type="number"
          aria-label={i18n(en.units.inputUnit, { unit: unit2 })}
          value={value2}
          onChange={(e) => updateValue2(Number(e.currentTarget.value))}
        />
        <div className="col-span-2">
          <Select
            aria-label={i18n(en.units.selectUnit2)}
            value={unit2}
            onChange={(value) => updateUnit2(value as Unit)}
          >
            {keys(conversionMap[type]).map((unit) => (
              <option key={unit} value={unit}>
                {getUnitWithName(unit)}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </>
  )
}
