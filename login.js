document.addEventListener('DOMContentLoaded', function() {
    // Set default email and password values
    const defaultEmail = 'kristian@gmail.com';
    const defaultPassword = 'kristian';
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const form = document.getElementById('login-form');

    // Prefill the email and password fields
    emailInput.value = defaultEmail;
    passwordInput.value = defaultPassword;

    // Add event listener to validate email and password
    form.addEventListener('submit', function(event) {
        const email = emailInput.value;
        const password = passwordInput.value;
        
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Validate password (example: minimum 6 characters)
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            event.preventDefault(); // Prevent form submission
            return;
        }
    });
});
