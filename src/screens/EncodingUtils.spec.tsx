import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { selectValue } from '../../test/helpers/selectValue'
import { EncodingUtils } from './EncodingUtils'

describe('EncodingUtils', () => {
  const textLabel = 'input text'
  const encodingLabel = 'select encoding'
  const value = 'test'

  it('updates text and displays in base64 encoding', async () => {
    const expected = 'dGVzdA=='
    const { getByLabelText } = render(<EncodingUtils />)
    const $text = getByLabelText(textLabel)
    const $encoding = getByLabelText(encodingLabel)
    await userEvent.clear($text)
    await userEvent.type($text, value)
    await selectValue($encoding, 'base64')
    expect(getByLabelText('encoded value')).toHaveTextContent(expected)
  })
  it('updates text and displays in hex encoding', async () => {
    const expected = '74657374'
    const { getByLabelText } = render(<EncodingUtils />)
    const $text = getByLabelText(textLabel)
    const $encoding = getByLabelText(encodingLabel)
    await userEvent.clear($text)
    await userEvent.type($text, value)
    await selectValue($encoding, 'hex')
    expect(getByLabelText('encoded value')).toHaveTextContent(expected)
  })
  it('updates text and displays in binary encoding', async () => {
    const expected = '1110100 1100101 1110011 1110100'
    const { getByLabelText } = render(<EncodingUtils />)
    const $text = getByLabelText(textLabel)
    const $encoding = getByLabelText(encodingLabel)
    await userEvent.clear($text)
    await userEvent.type($text, value)
    await selectValue($encoding, 'binary')
    expect(getByLabelText('encoded value')).toHaveTextContent(expected)
  })
})
