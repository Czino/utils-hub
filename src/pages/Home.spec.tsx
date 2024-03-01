import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Home } from './Home'

describe('Home', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
})
