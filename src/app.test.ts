// src/app.test.ts
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/dom';
import './app';

test('should display login success message for valid credentials', () => {
  render(document.body);

  const usernameInput = screen.getByLabelText('Username:') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('Password:') as HTMLInputElement;
  const submitButton = screen.getByText('Login') as HTMLButtonElement;
  const loginMessage = screen.getByText('');

  fireEvent.change(usernameInput, { target: { value: 'user' } });
  fireEvent.change(passwordInput, { target: { value: 'pass' } });
  fireEvent.click(submitButton);

  expect(loginMessage).toHaveTextContent('Login successful!');
});

test('should display error message for invalid credentials', () => {
  render(document.body);

  const usernameInput = screen.getByLabelText('Username:') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('Password:') as HTMLInputElement;
  const submitButton = screen.getByText('Login') as HTMLButtonElement;
  const loginMessage = screen.getByText('');

  fireEvent.change(usernameInput, { target: { value: 'invaliduser' } });
  fireEvent.change(passwordInput, { target: { value: 'invalidpass' } });
  fireEvent.click(submitButton);

  expect(loginMessage).toHaveTextContent('Invalid username or password');
});
