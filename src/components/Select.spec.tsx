import { render } from '@testing-library/react'
import { Select } from './Select'

describe('Select', () => {
  it('should render Select with styles', () => {
    const { asFragment } = render(
      <Select className="mt-4" value="text">
        <option>1</option>
        <option>2</option>
      </Select>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
