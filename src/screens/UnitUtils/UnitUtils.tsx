import { useState } from 'react'
import { Headline } from '../../components/Headline'
import en from '../../i18n/en'
import { i18n } from '../../i18n/i18n'
import { ScreenWithSideNavigation } from '../../templates/ScreenWithSideNavigation'
import { type Unit, type UnitType } from '../../utils/unit/conversionMap'
import { UnitConverter } from './components/UnitConverter'

type Props = {
  type: UnitType
  unit1: Unit
  unit2: Unit
}

// TODO add little explainer of the formula for each conversion
export const UnitUtils = (props: Props) => {
  const [type, setType] = useState<UnitType>(props.type)
  const [unit1, setUnit1] = useState(props.unit1)
  const [unit2, setUnit2] = useState(props.unit2)

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
    </ScreenWithSideNavigation>
  )
}
