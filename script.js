function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var language = document.getElementById("language").value;
    var zip = document.getElementById("zip").value;
    var about = document.getElementById("about").value;
    var isValid = true;

   

    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("languageError").innerHTML = "";
    document.getElementById("zipError").innerHTML = "";
    document.getElementById("aboutError").innerHTML = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password";
        isValid = false;
    }

    // Phone number validation
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number";
        isValid = false;
    }

    // Gender validation
    if (gender === "") {
        document.getElementById("genderError").innerHTML = "Please select your gender";
        isValid = false;
    }

    // Language validation
    if (language === "") {
        document.getElementById("languageError").innerHTML = "Please select your language";
        isValid = false;
    }

    // Zip code validation
    if (zip === "") {
        document.getElementById("zipError").innerHTML = "Please enter your zip code";
        isValid = false;
    }

    // About validation
    if (about === "") {
        document.getElementById("aboutError").innerHTML = "Please enter something about yourself";
        isValid = false;
    }

    return isValid;
}