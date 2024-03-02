import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StringUtils } from './StringUtils'

describe('StringUtils', () => {
  const newText = 'I am the new text'
  it('update textarea content', async () => {
    const { getByRole } = render(<StringUtils />)
    await userEvent.clear(getByRole('textbox'))
    await userEvent.type(getByRole('textbox'), newText)
    expect(getByRole('textbox')).toHaveValue(newText)
  })
  it('transform text to uppercase', async () => {
    const { getByRole, getByText } = render(<StringUtils />)
    await userEvent.clear(getByRole('textbox'))
    await userEvent.type(getByRole('textbox'), newText)
    await userEvent.click(getByText('uppercase'))
    expect(getByRole('textbox')).toHaveValue('I AM THE NEW TEXT')
  })
  it('transform text to lowercase', async () => {
    const { getByRole, getByText } = render(<StringUtils />)
    await userEvent.clear(getByRole('textbox'))
    await userEvent.type(getByRole('textbox'), newText)
    await userEvent.click(getByText('lowercase'))
    expect(getByRole('textbox')).toHaveValue('i am the new text')
  })
  it('reverses a text', async () => {
    const { getByRole, getByText } = render(<StringUtils />)
    await userEvent.clear(getByRole('textbox'))
    await userEvent.type(getByRole('textbox'), newText)
    await userEvent.click(getByText('reverse'))
    expect(getByRole('textbox')).toHaveValue('txet wen eht ma I')
  })
  it('adds 👏 emoji between every word', async () => {
    const { getByRole, getByText } = render(<StringUtils />)
    await userEvent.clear(getByRole('textbox'))
    await userEvent.type(getByRole('textbox'), newText)
    await userEvent.click(getByText('👏'))
    expect(getByRole('textbox')).toHaveValue('I👏am👏the👏new👏text')
  })
})
