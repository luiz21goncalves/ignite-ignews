import { render, screen } from "@testing-library/react"
import { useSession } from 'next-auth/client'
import { mocked } from 'ts-jest/utils'
import { SignInButton } from "."

jest.mock('next-auth/client')

describe('SingInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInButton />)

    expect(screen.getByText(/sign in with github/i)).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([
      { 
        user: { name: 'John Doe', email: 'example@johndoe.com' }, 
        expires: 'fake-espires'
      },
      false
    ])

    render(<SignInButton />)

    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })
})