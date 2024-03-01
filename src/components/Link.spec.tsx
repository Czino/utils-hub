import { render } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  it('should render Link', () => {
    const { asFragment } = render(
      <Link className="mt-4" href="/link">
        Test
      </Link>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
