document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const errorMsg = document.getElementById("error-msg");

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to show error classes
    function shoErrorClasses() {
        errorMsg.classList.remove("noError");
        errorMsg.classList.add("showError");
        emailInput.classList.add("error");
    }

    // Function to remove error classes
    function removeErrorClasses() {
        errorMsg.classList.remove("showError");
        errorMsg.classList.add("noError");
        emailInput.classList.remove("error");
    }

    // Add blur event listener to the email input
    emailInput.addEventListener("blur", () => {
        const email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            shoErrorClasses();
        } else {
            removeErrorClasses();
        }
    });

    // Handle form submission
    document.getElementById("signUpForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            localStorage.setItem("email", email);
            window.location.href = "confirm.html";
        } else {
            shoErrorClasses();
        }
    });
});