// script.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('checkbox');

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert('Logged in as ' + username);
});

window.addEventListener('DOMContentLoaded', function() {
  const savedUsername = localStorage.getItem('username');

  if (savedUsername) {
    const existingButton = document.createElement('button');
    existingButton.id = 'existing';
    existingButton.textContent = 'Login as existing user';
    document.body.appendChild(existingButton);

    existingButton.addEventListener('click', function() {
      alert('Logged in as ' + savedUsername);
    });
  }
});
