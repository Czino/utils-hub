import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { selectValue } from '../../test/helpers/selectValue'
import type { Unit, UnitType } from '../utils/unit/conversionMap'
import { UnitUtils } from './UnitUtils'

describe('UnitUtils', () => {
  const props = {
    type: 'temperature' satisfies UnitType,
    unit1: 'ºC' satisfies Unit,
    unit2: 'ºF' satisfies Unit,
  } as const
  it('update value of unit 1 and calculate value for unit 2', async () => {
    const input1Label = 'input value for unit ºC'
    const input2Label = 'input value for unit ºF'
    const value = 100
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $input1 = getByLabelText(input1Label)
    const $input2 = getByLabelText(input2Label)
    await userEvent.clear($input1)
    await userEvent.type($input1, String(value))
    expect($input1).toHaveValue(value)
    expect($input2).toHaveValue(212)
  })
  it('update value of unit 2 and calculate value for unit 1', async () => {
    const input1Label = 'input value for unit ºC'
    const input2Label = 'input value for unit ºF'
    const value = 100
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $input1 = getByLabelText(input1Label)
    const $input2 = getByLabelText(input2Label)
    await userEvent.clear($input2)
    await userEvent.type($input2, String(value))
    expect($input2).toHaveValue(value)
    expect($input1).toHaveValue(37.8)
  })
  it('selects unit 1 and calculate value for unit 1', async () => {
    const value = 'K (Kelvin)'
    const select1Label = 'select unit 1'
    const input1Label = 'input value for unit K'
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $select1 = getByLabelText(select1Label)
    await selectValue($select1, value)
    const $input1 = getByLabelText(input1Label)
    expect($select1).toHaveValue(value)
    expect($input1).toHaveValue(273.15)
  })
  it('selects unit 2 and calculate value for unit 2', async () => {
    const value = 'K (Kelvin)'
    const select2Label = 'select unit 2'
    const input2Label = 'input value for unit K'
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $select2 = getByLabelText(select2Label)
    await selectValue($select2, value)
    const $input2 = getByLabelText(input2Label)
    expect($select2).toHaveValue(value)
    expect($input2).toHaveValue(273.15)
  })
  it('selects unit type and updates units', async () => {
    const value = 'distance'
    const typeLabel = 'select unit type'
    const input1Label = 'input value for unit m'
    const select1Label = 'select unit 1'
    const input2Label = 'input value for unit km'
    const select2Label = 'select unit 2'
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $type = getByLabelText(typeLabel)
    await selectValue($type, value)
    const $select1 = getByLabelText(select1Label)
    const $input1 = getByLabelText(input1Label)
    const $select2 = getByLabelText(select2Label)
    const $input2 = getByLabelText(input2Label)
    expect($input1).toHaveValue(0)
    expect($select1).toHaveValue('m (meter)')
    expect($input2).toHaveValue(0)
    expect($select2).toHaveValue('km (kilometer)')
  })
})
