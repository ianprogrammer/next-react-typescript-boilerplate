import { render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#191919' })
  })
})
