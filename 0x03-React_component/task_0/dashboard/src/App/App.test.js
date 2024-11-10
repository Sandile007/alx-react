import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />);
    const divAppElement = screen.getByTestId('App');
    expect(divAppElement).toBeInTheDocument();
  });

  test('contains the Notifications component', () => {
    render(<App />);
    const notifications = screen.getByTestId('Notifications');
    expect(notifications).toBeInTheDocument();
  });

  test('contains the Header component', () => {
    render(<App />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });

  test('contains the Footer component', () => {
    render(<App />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  describe('when isLoggedIn is false', () => {
    test('renders the Login component and not CourseList', () => {
      render(<App isLoggedIn={false} />);
      const login = screen.getByTestId('Login');
      expect(login).toBeInTheDocument();
      expect(screen.queryByTestId('CourseList')).not.toBeInTheDocument();
    });
  });

  describe('when isLoggedIn is true', () => {
    test('renders the CourseList component and not Login', () => {
      render(<App isLoggedIn={true} />);
      const courseList = screen.getByTestId('CourseList');
      expect(courseList).toBeInTheDocument();
      expect(screen.queryByTestId('Login')).not.toBeInTheDocument();
    });
  });
});
