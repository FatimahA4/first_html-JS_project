// JavaScript source code
let num1, num2; // global variables 
window.onload = generateCaptcha;
function generateCaptcha() {
     num1 = Math.floor(Math.random() * 9) + 1;
     num2 = Math.floor(Math.random() * 9) + 1;
    document.getElementById("captchaQuestion").innerText = "Solve: " + num1 + " + " + num2 + " = ?";
}

function validateForm(event) {
    event.preventDefault();

    
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var captcha = document.getElementById("captchaAnswer").value;


    // check all 
    if (!name && !lastName && !email && !subject && !message && !captcha) {
        window.alert("Please fill out the form before submitting!");
        return false;
    }

    // check name 
    if (name == "") {
        window.alert("Name must be filled out!");
        return false;
    }
    else if (name.length < 3) {
        window.alert("Name must be at least 3 characters long!");
        return false;
    }
   

    // check last name  
    if (lastName == "") {
        window.alert("Last Name must be filled out!");
        return false;
    }
    else if (lastName.length < 3) {
        window.alert("Last Name must be at least 3 characters long!");
        return false;
    }

       // check email 
    if (email == "") {
        window.alert("Email must be filled out!");
        return false;
    }

    // check subject 
    if (subject == "") {
       window.alert("Subject must contain at least one word!");
       return false;
    }

    // check message 
    if (message === "") {
       window.alert("Please write your message.");
       return false;
     }

    if (captcha === "") {
        window.alert("Please solve the captcha.");
        return false;
    }

    if (parseInt(captcha) !== num1 + num2) {
        window.alert("Incorrect captcha. Please try again.");
        generateCaptcha(); // generate a new one if user fails
        document.getElementById("captchaAnswer").value = ""; // clear the input
        return false;
    }


    window.alert("Thank you! Your message has been submitted successfully.");
    event.target.submit();

    
}