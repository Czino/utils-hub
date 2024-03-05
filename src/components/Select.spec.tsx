import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toMatchDiffSnapshot } from 'snapshot-diff'
import { Select } from './Select'
expect.extend({ toMatchDiffSnapshot })

describe('Select', () => {
  const base = render(
    <Select className="mt-4" value="text">
      <option>1</option>
      <option>2</option>
    </Select>,
  ).asFragment()
  it('should render Select', () => {
    expect(base).toMatchSnapshot()
  })
  it('should render Select without options', () => {
    const { asFragment } = render(<Select className="mt-4" value="text"></Select>)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should open options when focus', async () => {
    const { asFragment, getByLabelText } = render(
      <Select className="mt-4" value="text" aria-label="label">
        <option>1</option>
        <option>2</option>
      </Select>,
    )
    await userEvent.click(getByLabelText('label'))
    expect(asFragment()).toMatchDiffSnapshot(base)
  })
  it('lets user type search and select option', async () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <Select className="mt-4" value="text" aria-label="label" onChange={onChange}>
        <option>1</option>
        <option>2</option>
      </Select>,
    )
    await userEvent.click(getByLabelText('label'))
    await userEvent.type(getByLabelText('label'), '2')
    await userEvent.click(getByLabelText('option 2'))
    expect(onChange).toHaveBeenCalledWith('2')
  })
  it('filters search and displays all options when search term is empty', async () => {
    const { asFragment, getByLabelText } = render(
      <Select className="mt-4" value="text" aria-label="label">
        <option>1</option>
        <option>2</option>
      </Select>,
    )
    await userEvent.click(getByLabelText('label'))
    const whenAllOptions = asFragment()
    await userEvent.type(getByLabelText('label'), '2')
    const whenFilteredOptions = asFragment()
    await userEvent.clear(getByLabelText('label'))
    const finalState = asFragment()
    expect(finalState).toMatchDiffSnapshot(whenAllOptions)
    expect(finalState).toMatchDiffSnapshot(whenFilteredOptions)
  })
})
