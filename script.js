// Get form elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const forgotBtn = document.getElementById('forgotBtn');
const googleBtn = document.getElementById('googleBtn');
const appleBtn = document.getElementById('appleBtn');
const signupBtn = document.getElementById('signupBtn');
const toast = document.getElementById('toast');

// ============================================
// PASSWORD TOGGLE
// ============================================

togglePasswordBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Toggle password visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
    }
});

// ============================================
// LOGIN FORM SUBMISSION
// ============================================

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Validation
    if (email === '' || password === '') {
        showMessage('Please enter your email and password.');
        return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.');
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters.');
        return;
    }
    
    // Simulate login
    showMessage('Login successful! 🎉');
    
    // Clear form
    setTimeout(() => {
        loginForm.reset();
        passwordInput.type = 'password';
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
    }, 1500);
});

// ============================================
// FORGOT PASSWORD
// ============================================

forgotBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showMessage('Forgot Password clicked');
});

// ============================================
// GOOGLE LOGIN
// ============================================

googleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showMessage('Google Login - Demo Mode');
});

// ============================================
// APPLE LOGIN
// ============================================

appleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showMessage('Apple Login - Demo Mode');
});

// ============================================
// SIGN UP
// ============================================

signupBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showMessage('Sign Up clicked');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Show toast message
 */
function showMessage(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

// Enter key to login
loginForm.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        loginForm.dispatchEvent(new Event('submit'));
    }
});

// Console welcome message
console.log('%cWelcome to Login App! 👋', 'font-size: 20px; font-weight: bold; color: #6C5CE7;');
console.log('%cThis is a demo login page. Try entering any email and password.', 'font-size: 14px; color: #555;');
