document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let nameFeedback = document.createElement('p')
        form.insertBefore(nameFeedback, nameInput.nextSibling)

        let emailFeedback = document.createElement('p')
        form.insertBefore(emailFeedback, emailInput.nextSibling)


        let passwordFeedback = document.createElement('p')
        form.insertBefore(passwordFeedback, passwordInput.nextSibling)
        
        // Task: Validate each field here
        // - Check if the name, email, and password are not empty.
        // - Validate the email format.
        // - Check the password length and complexity.
        // - Display messages or indicators for each input's validation.
        if (nameInput.value.trim() === '') {
            nameFeedback.textContent = 'Name cannot be empty'
            nameFeedback.style.color = 'red'
        }

        if (emailInput.value.trim() === '') {
            emailFeedback.textContent = 'Email cannot be empty'
            emailFeedback.style.color = 'red'
        }

        if (passwordInput.value.trim() === '') {
            passwordFeedback.textContent = 'Password cannot be empty'
        }

        if (passwordInput.value.length < 8) {
            passwordFeedback.textContent = 'Password must have at least 8 characters'
            passwordFeedback.style.color = 'red'
        }
        // Example Validation:
        // if (nameInput.value.trim() === '') {
        //     formFeedback.textContent = 'Name cannot be empty';
        //     // Add more validation checks
        // }

    });
});
