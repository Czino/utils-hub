import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should render Button with styles', () => {
    const { asFragment } = render(
      <Button className="mt-4" onClick={jest.fn()}>
        Test
      </Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
