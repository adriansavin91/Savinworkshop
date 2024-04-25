document.addEventListener('DOMContentLoaded', function() {
    // Login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve input values
        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');
        const email = emailInput.value.trim(); // Trim whitespace
        const password = passwordInput.value.trim(); // Trim whitespace

        // Validate input fields
        if (!validateLoginForm(email, password)) {
            return; // Exit early if validation fails
        }

        // Send AJAX request to server for login authentication
        authenticateUser(email, password);
    });

    // Registration form submission
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve input values
        const usernameInput = document.getElementById('registration-username');
        const emailInput = document.getElementById('registration-email');
        const passwordInput = document.getElementById('registration-password');
        const username = usernameInput.value.trim(); // Trim whitespace
        const email = emailInput.value.trim(); // Trim whitespace
        const password = passwordInput.value.trim(); // Trim whitespace

        // Validate input fields
        if (!validateRegistrationForm(username, email, password)) {
            return; // Exit early if validation fails
        }

        // Send AJAX request to server for user registration
        registerUser(username, email, password);
    });

    // Function to validate login form
    function validateLoginForm(email, password) {
        if (!email || !password) {
            // Display error message or highlight empty fields
            return false;
        }

        if (!isValidEmail(email)) {
            // Display error message for invalid email format
            return false;
        }

        return true;
    }

    // Function to validate registration form
    function validateRegistrationForm(username, email, password) {
        if (!username || !email || !password) {
            // Display error message or highlight empty fields
            return false;
        }

        if (!isValidEmail(email)) {
            // Display error message for invalid email format
            return false;
        }

        return true;
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to authenticate user
    function authenticateUser(email, password) {
        // Placeholder for AJAX request to server for login authentication
        // Replace with actual AJAX code
        console.log('Authentication request sent for email:', email);
    }

    // Function to register user
    function registerUser(username, email, password) {
        // Placeholder for AJAX request to server for user registration
        // Replace with actual AJAX code
        console.log('Registration request sent for username:', username, 'and email:', email);
    }
});
