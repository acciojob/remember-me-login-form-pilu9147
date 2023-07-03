//your JS code here. If required.
   // Check if there are saved details in local storage
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      const existingBtn = document.createElement('button');
      existingBtn.id = 'existing';
      existingBtn.textContent = 'Login as existing user';
      document.body.appendChild(existingBtn);
    }
    
    // Submit event handler for the form
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('rememberMe').checked;
      
      // Save or remove details from local storage based on the "Remember me" checkbox
      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
      
      // Show alert with the logged in username
      alert('Logged in as ' + username);
    });
    
    // Event handler for the "Login as existing user" button
    document.getElementById('existing').addEventListener('click', function() {
      const username = localStorage.getItem('username');
      alert('Logged in as ' + username);
    });