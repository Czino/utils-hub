import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NumberUtils } from './NumberUtils'

describe('NumberUtils', () => {
  const value1Label = 'input number: number 1'
  const value2Label = 'input number: number 2'
  const baseLabel = 'input number: base'

  it('updates value 1 and converts number 2', async () => {
    const { getByLabelText } = render(<NumberUtils />)
    const $value1 = getByLabelText(value1Label)
    const $value2 = getByLabelText(value2Label)
    await userEvent.clear($value1)
    await userEvent.type($value1, '10')
    expect($value1).toHaveValue(10)
    expect($value2).toHaveValue('a')
  })
  it('updates value 2 and converts number 1', async () => {
    const { getByLabelText } = render(<NumberUtils />)
    const $value1 = getByLabelText(value1Label)
    const $value2 = getByLabelText(value2Label)
    await userEvent.clear($value2)
    await userEvent.type($value2, 'ff')
    expect($value2).toHaveValue('ff')
    expect($value1).toHaveValue(255)
  })
  it('updates base and converts number 2', async () => {
    const { getByLabelText } = render(<NumberUtils />)
    const $value1 = getByLabelText(value1Label)
    const $base = getByLabelText(baseLabel)
    const $value2 = getByLabelText(value2Label)
    await userEvent.clear($value1)
    await userEvent.type($value1, '10')
    await userEvent.clear($base)
    expect($value2).toHaveValue('1010')
    expect($base).toHaveValue(2)
  })
  it('updates base base has minimum 2 and maximum 36', async () => {
    const { getByLabelText } = render(<NumberUtils />)
    const $base = getByLabelText(baseLabel)
    await userEvent.clear($base)
    expect($base).toHaveValue(2)
    await userEvent.type($base, '37')
    expect($base).toHaveValue(36)
  })
})
