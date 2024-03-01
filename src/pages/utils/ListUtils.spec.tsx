import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ListUtils } from './ListUtils'

describe('ListUtils', () => {
  const newText = '2\n3\n1\n4\n8'
  const newTextReversed = '8\n4\n1\n3\n2'
  const newTextSorted = '1\n2\n3\n4\n8'
  const newTextSortedReverse = '8\n4\n3\n2\n1'
  it('update textarea content', async () => {
    const { getByRole } = render(<ListUtils />)
    await userEvent.type(getByRole('textbox'), newText)
    expect(getByRole('textbox')).toHaveValue(newText)
  })
  it('sorts textarea content in both direction', async () => {
    const { getByRole, getByText } = render(<ListUtils />)
    await userEvent.type(getByRole('textbox'), newText)
    await userEvent.click(getByText('sort'))
    expect(getByRole('textbox')).toHaveValue(newTextSorted)
    await userEvent.click(getByText('sort'))
    expect(getByRole('textbox')).toHaveValue(newTextSortedReverse)
  })
  it('reverses textarea content', async () => {
    const { getByRole, getByText } = render(<ListUtils />)
    await userEvent.type(getByRole('textbox'), newText)
    await userEvent.click(getByText('reverse'))
    expect(getByRole('textbox')).toHaveValue(newTextReversed)
  })
  it('shuffles textarea content', async () => {
    const { getByRole, getByText } = render(<ListUtils />)
    await userEvent.type(getByRole('textbox'), newText)
    await userEvent.click(getByText('shuffle'))
    expect(getByRole('textbox')).not.toHaveValue(newText)
  })
  it('flters textarea content by unique lines', async () => {
    const textWithDuplicates = '2\n3\n2\n2\n8'
    const textWithOutDuplicates = '2\n3\n8'
    const { getByRole, getByText } = render(<ListUtils />)
    await userEvent.type(getByRole('textbox'), textWithDuplicates)
    await userEvent.click(getByText('unique'))
    expect(getByRole('textbox')).toHaveValue(textWithOutDuplicates)
  })
})
