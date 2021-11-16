import { render, screen } from '@testing-library/react';

import { Header } from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));

jest.mock('next-auth/client', () => ({
  useSession() {
    return [null, false];
  },
}));

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/posts/i)).toBeInTheDocument();
  });
});
