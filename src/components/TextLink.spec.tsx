import { render } from '@testing-library/react'
import { TextLink } from './TextLink'

describe('TextLink', () => {
  it('should render TextLink', () => {
    const { asFragment } = render(
      <TextLink className="mt-4" href="/test">
        Test
      </TextLink>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
