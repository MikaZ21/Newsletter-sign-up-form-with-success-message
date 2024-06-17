# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). 

[Frontend Mentor](https://www.frontendmentor.io) 
🔹Frontend Mentor challenges help you improve your coding skills by building realistic projects.🔹

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [What I learned](#what-i-learned)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge
Your challenge is to build out this newsletter form and get it looking as close to the design as possible.

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop-Screen](https://github.com/MikaZ21/Results-Summary-Component/assets/93892096/e9cc1e4e-9f5e-4243-8d0b-41070ceda4bd)*Desktop-Screen*

### What I learned
💡 Building this project presented several interesting challenges that helped me grow as a developer.

📍 Responsive Design:
One of the primary challenges was ensuring the design was responsive and looked great on both mobile and desktop devices. 
* media queries
* flexbox

Memo: Managing CSS specificity to avoid conflicts and keeping the styles organized was essential. Writing clean, modular CSS with clear class names and proper nesting helped maintain the code's readability and scalabitilty.

📍 Form Validation
Implementing form validation provided immediate feedback to users.
* JavaScript

```js
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
```

Ensuring that users enter a valid email address before allowing form submission,
and providing immediate feedback for invalid inputs:

📍 Cross-Browser Compatibility
Ensuring the design and functionality worked across different web browsers.
* Safari
* Chrome

---
<img alt="Desktop-active-states" src="https://github.com/MikaZ21/Results-Summary-Component/assets/93892096/91f2c479-d8ab-4918-89b3-b1137a4f57d1" width="30%" height="30%">*Desktop-active-states*
---
<img alt="Desktop-Success" src="https://github.com/MikaZ21/Results-Summary-Component/assets/93892096/f88b4209-e6a8-47d0-8d62-41435857b58b" width="30%" height="30%">*Desktop-Success*
---
<img alt="Desktop-Success-active" src="https://github.com/MikaZ21/Results-Summary-Component/assets/93892096/cf3ae2e7-f1a7-4001-bd7d-64cb06f6b2f3" width="30%" height="30%">*Desktop-Success-active*
---
<img alt="Desktop-error-states" src="https://github.com/MikaZ21/Results-Summary-Component/assets/93892096/cf3f7589-9891-4e59-b051-a776266ddb59" width="30%" height="30%">*Desktop-error-states*

Email validation: Display error messages and highlight incorrect inputs or left empty,
ensuring a user-friendly form submission process.
---
<img alt="Mobile-Screen" src="https://github.com/MikaZ21/Results-Summary-Component/assets/93892096/6b0aaf17-5593-49d3-8663-ac8498c8c5de" width="30%" height="30%">*Mobile-Screen*
---
<img alt="Mobile-Success" src="https://github.com/MikaZ21/Results-Summary-Component/assets/93892096/69da9c3a-a143-4214-83d1-187326434270" width="30%" height="30%">*Mobile-Success*
---

## Acknowledgments

A special thanks to [Poulami Saha](https://www.youtube.com/watch?v=LJB9qT0BjuU), whose step-by-step tutorial was invaluable in guiding me through this project✨