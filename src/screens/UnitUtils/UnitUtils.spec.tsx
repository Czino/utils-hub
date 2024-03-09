import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toMatchDiffSnapshot } from 'snapshot-diff'
import { selectValue } from '../../../test/helpers/selectValue'
import { UnitUtils } from './UnitUtils'
expect.extend({ toMatchDiffSnapshot })

describe('UnitUtils', () => {
  const props = {
    type: 'temperature',
    unit1: 'K',
    unit2: 'ºC',
  } as const
  const select1Label = 'select unit 1'
  const select2Label = 'select unit 2'

  afterEach(() => {
    window.location.hash = ''
  })
  it('renders correctly', () => {
    const base = render(<UnitUtils {...props} />).asFragment()
    expect(base).toMatchSnapshot()
    expect(render(<UnitUtils {...{ type: 'weight', unit1: 'g', unit2: 'st' }} />).asFragment()).toMatchDiffSnapshot(
      base,
    )
  })
  it('update value of unit 1 and calculate value for unit 2', async () => {
    const input1Label = 'input value for unit K'
    const input2Label = 'input value for unit ºC'
    const value = 100
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $input1 = getByLabelText(input1Label)
    const $input2 = getByLabelText(input2Label)
    await userEvent.clear($input1)
    await userEvent.type($input1, String(value))
    expect($input1).toHaveValue(value)
    expect($input2).toHaveValue(-173.1)
    expect(window.location.hash).toBe('#value1=100&value2=-173.1')
    expect(window.location.pathname).toBe('/utils/units/temperature-K-%C2%BAC')
  })
  it('update value of unit 2 and calculate value for unit 1', async () => {
    const input1Label = 'input value for unit K'
    const input2Label = 'input value for unit ºC'
    const value = 100
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $input1 = getByLabelText(input1Label)
    const $input2 = getByLabelText(input2Label)
    await userEvent.clear($input2)
    await userEvent.type($input2, String(value))
    expect($input2).toHaveValue(value)
    expect($input1).toHaveValue(373.15)
    expect(window.location.hash).toBe('#value1=373.15&value2=100')
    expect(window.location.pathname).toBe('/utils/units/temperature-K-%C2%BAC')
  })
  it('selects unit 1 and calculate value for unit 1', async () => {
    const value = 'ºF (Fahrenheit)'
    const input1Label = 'input value for unit ºF'
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $select1 = getByLabelText(select1Label)
    await selectValue($select1, value)
    const $input1 = getByLabelText(input1Label)
    expect($select1).toHaveValue(value)
    expect($input1).toHaveValue(-459.6)
    expect(window.location.hash).toBe('#value1=-459.6&value2=-273.1')
    expect(window.location.pathname).toBe('/utils/units/temperature-%C2%BAF-%C2%BAC')
  })
  it('selects unit 2 and calculate value for unit 2', async () => {
    const value = 'ºF (Fahrenheit)'
    const input2Label = 'input value for unit ºF'
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $select2 = getByLabelText(select2Label)
    await selectValue($select2, value)
    const $input2 = getByLabelText(input2Label)
    expect($select2).toHaveValue(value)
    expect($input2).toHaveValue(-459.7)
    expect(window.location.hash).toBe('#value1=0&value2=-459.7')
    expect(window.location.pathname).toBe('/utils/units/temperature-K-%C2%BAF')
  })
  it('selects unit type and updates units', async () => {
    const input1Label = 'input value for unit m'
    const input2Label = 'input value for unit km'
    const { getByLabelText, getByText } = render(<UnitUtils {...props} />)
    await userEvent.click(getByText('distance'))
    const $select1 = getByLabelText(select1Label)
    const $input1 = getByLabelText(input1Label)
    const $select2 = getByLabelText(select2Label)
    const $input2 = getByLabelText(input2Label)
    expect($input1).toHaveValue(0)
    expect($select1).toHaveValue('m (meter)')
    expect($input2).toHaveValue(0)
    expect($select2).toHaveValue('km (kilometer)')
    expect(window.location.hash).toBe('#value1=0&value2=0')
    expect(window.location.pathname).toBe('/utils/units/distance-m-km')
  })
  it('can swap units', async () => {
    const value = 100
    const value2 = 373.15
    const input1Label = 'input value for unit ºC'
    const input2Label = 'input value for unit K'
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $input1 = getByLabelText(input1Label)
    const $input2 = getByLabelText(input2Label)
    const $select1 = getByLabelText(select1Label)
    const $select2 = getByLabelText(select2Label)
    const $swap = getByLabelText('swap units')
    await userEvent.clear($input1)
    await userEvent.type($input1, String(value))
    expect($input1).toHaveValue(value)
    expect($input2).toHaveValue(value2)
    expect($select1).toHaveValue('K (Kelvin)')
    expect($select2).toHaveValue('ºC (Celsius)')
    expect(window.location.hash).toBe('#value1=373.15&value2=100')
    expect(window.location.pathname).toBe('/utils/units/temperature-K-%C2%BAC')
    await userEvent.click($swap)
    expect($input1).toHaveValue(value2)
    expect($input2).toHaveValue(value)
    expect($select1).toHaveValue('ºC (Celsius)')
    expect($select2).toHaveValue('K (Kelvin)')
    expect(window.location.hash).toBe('#value1=100&value2=373.15')
    expect(window.location.pathname).toBe('/utils/units/temperature-%C2%BAC-K')
  })
  it('loads values if hash is present', () => {
    window.location.hash = 'value1=300&value2=26.9'
    const input1Label = 'input value for unit K'
    const input2Label = 'input value for unit ºC'
    const { getByLabelText } = render(<UnitUtils {...props} />)
    const $input1 = getByLabelText(input1Label)
    const $input2 = getByLabelText(input2Label)
    expect($input1).toHaveValue(300)
    expect($input2).toHaveValue(26.9)
  })
})
