document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if username and password are correct
    if (username === 'admin' && password === 'admin') {
      // Redirect to dashboard page if credentials are correct
      window.location.href = '/dashboard/index.html';
    } else {
      // Show error message or handle invalid credentials
      alert('Invalid username or password. Please try again.');
    }
  });