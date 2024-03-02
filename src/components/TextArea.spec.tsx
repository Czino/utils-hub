import { render } from '@testing-library/react'
import { TextArea } from './TextArea'

describe('TextArea', () => {
  it('should render TextArea with styles', () => {
    const { asFragment } = render(
      <TextArea className="mt-4" value="text">
        Test
      </TextArea>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
