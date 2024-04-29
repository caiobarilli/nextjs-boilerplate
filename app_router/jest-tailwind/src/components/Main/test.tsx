import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /nextjs/i })).toBeInTheDocument()
  })

  it('should have a classes text-3xl, font-bold and underline', () => {
    render(<Main />)
    const heading = screen.getByRole('heading', { name: /nextjs/i })
    expect(heading).toHaveClass('text-3xl font-bold underline')
  })
})
