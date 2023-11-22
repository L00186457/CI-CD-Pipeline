// src/app.ts
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = (document.getElementById('username') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;

  const loginMessage = document.getElementById('loginMessage');

  if (username === 'user' && password === 'pass') {
    loginMessage.innerText = 'Login successful!';
  } else {
    loginMessage.innerText = 'Invalid username or password';
  }
});
