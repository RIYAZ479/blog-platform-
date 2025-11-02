document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                alert('Login functionality would be implemented here.\n\nEmail: ' + email);
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (!fullname || !email || !password || !confirmPassword) {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            alert('Registration functionality would be implemented here.\n\nName: ' + fullname + '\nEmail: ' + email);
        });
    }
});