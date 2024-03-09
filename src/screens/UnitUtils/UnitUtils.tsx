import { useState } from 'react'
import { Headline } from '../../components/Headline'
import { Headline2 } from '../../components/Headline2'
import { TextLink } from '../../components/TextLink'
import en from '../../i18n/en'
import { i18n } from '../../i18n/i18n'
import { ScreenWithSideNavigation } from '../../templates/ScreenWithSideNavigation'
import { keys } from '../../utils/object/keys'
import { conversionMap, type Unit, type UnitType } from '../../utils/unit/conversionMap'
import { UnitConverter } from './components/UnitConverter'
import { getURLPath } from './helpers/getURLPath'

const UnitDescription = ({ unit }: { unit: Unit }) => (
  <>
    <Headline2>{i18n(en.units.about, { unit, name: i18n(en.units[`${unit}.name`]) })}</Headline2>
    <p>{i18n(en.units[`about.${unit}`])}</p>
  </>
)

type Props = {
  type: UnitType
  unit1: Unit
  unit2: Unit
}

// TODO localize description of each measurement type
export const UnitUtils = (props: Props) => {
  const [type, setType] = useState<UnitType>(props.type)
  const [unit1, setUnit1] = useState(props.unit1)
  const [unit2, setUnit2] = useState(props.unit2)
  const units = keys(conversionMap[type])

  return (
    <ScreenWithSideNavigation>
      <Headline>{i18n(en.units.title)}</Headline>
      <p>{i18n(en.units.description)}</p>
      <UnitConverter
        {...{
          type,
          setType,
          unit1,
          setUnit1,
          unit2,
          setUnit2,
        }}
      />
      <hr />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <UnitDescription unit={unit1} />
        </div>
        <div>
          <UnitDescription unit={unit2} />
        </div>
      </div>
      <hr />
      <Headline2>{i18n(en.units.allConversions, { type })}</Headline2>
      <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3 lg:grid-cols-4">
        {units.map((unit) => {
          const otherUnits = units.filter((u) => u !== unit)
          return (
            <ul>
              {otherUnits.map((otherUnit) => (
                <li>
                  <TextLink href={getURLPath({ type, unit1: unit, unit2: otherUnit })}>
                    {i18n(en.units.conversionFromXToY, { x: unit, y: otherUnit })}
                  </TextLink>
                </li>
              ))}
            </ul>
          )
        })}
      </div>
    </ScreenWithSideNavigation>
  )
}
