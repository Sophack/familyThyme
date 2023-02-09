async function loginFormHandler(event) {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#login-form').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/views/homepage');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector(".login-form").addEventListener('submit', loginFormHandler);