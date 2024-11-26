const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const emailAddress = document.getElementById("email");
const userPassword = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const main = document.getElementById("main");


// Validate input on submit
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let isValid = true;

    // Validate first name
    if(firstName.value.trim() === "") {
        showError("firstname-error", "First Name cannot be empty.");
        isValid = false;
    } else {
        hideError("firstname-error");
    }

    
    // Validate last name
    if(lastName.value.trim() === "") {
        showError("lastname-error", "Last name cannot be empty");
        isValid = false;
    } else {
        hideError("lastname-error");
    }


    // Validate Email
    if(!validateEmail(emailAddress.value)) {
        showError("email-error", "Looks like this is not an email");
        isValid = false;
    } else {
        hideError("email-error");
    }


    // Validate Password
    if(userPassword.value.trim() === "") {
        showError("password-error", "Password cannot be empty.");
        isValid = false;
    } else {
        hideError("password-error");
    }


    // If all fields are valid, show successful page.
    if(isValid) {
        main.innerHTML = `
            <div class="welcome-page">
                <h1 class="welcome-heading">Welcome, ${firstName.value.trim()}!</h1>
                <p class="welcome-paragraph">
                    Thank you for signing up. Your email
                    <strong>${emailAddress.value.trim()}</strong> 
                    has been successfully registered.
                </p>
            </div>
        `
    } else {
        submitBtn.classList.add("disabled");
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = "none";
}

// Email validation helper
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}