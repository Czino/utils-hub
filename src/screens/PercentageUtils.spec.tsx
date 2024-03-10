import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PercentageUtils } from './PercentageUtils'

describe('PercentageUtils', () => {
  const value1Label = 'input number: number 1'
  const value2Label = 'input number: of number 2'
  const percentageLabel = 'input percentage'

  it('updates value 1 and calculates percent', async () => {
    const { getByLabelText } = render(<PercentageUtils />)
    const $value1 = getByLabelText(value1Label)
    const $percent = getByLabelText(percentageLabel)
    await userEvent.clear($value1)
    await userEvent.type($value1, '10')
    expect($value1).toHaveValue(10)
    expect($percent).toHaveValue(5)
  })
  it('updates value 2 and calculates percent', async () => {
    const { getByLabelText } = render(<PercentageUtils />)
    const $value2 = getByLabelText(value2Label)
    const $percent = getByLabelText(percentageLabel)
    await userEvent.clear($value2)
    await userEvent.type($value2, '10')
    expect($value2).toHaveValue(10)
    expect($percent).toHaveValue(10)
  })
  it('updates percent and calculates value 1', async () => {
    const { getByLabelText } = render(<PercentageUtils />)
    const $value1 = getByLabelText(value1Label)
    const $percent = getByLabelText(percentageLabel)
    await userEvent.clear($percent)
    await userEvent.type($percent, '10')
    expect($value1).toHaveValue(20)
    expect($percent).toHaveValue(10)
  })
})
