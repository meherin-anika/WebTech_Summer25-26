let attempts = 0;
let lockTime = null;

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Check if account is locked
    if (lockTime !== null) {

        let currentTime = new Date().getTime();

        if (currentTime < lockTime) {

            message.innerHTML = "Account is locked. Try again after 5 minutes.";
            return;

        } else {

            attempts = 0;
            lockTime = null;

        }
    }

    // Empty validation
    if (username == "" || password == "") {

        message.innerHTML = "Username and Password cannot be empty.";
        return;
    }

    // Correct login
    if (username == "AIUB" && password == "$_student") {

        message.innerHTML = "Successfully Logged In";
        attempts = 0;
        return;
    }

    // Wrong login
    attempts++;

    if (attempts == 1) {

        message.innerHTML = "You have 3 attempts left.";

    }
    else if (attempts == 2) {

        message.innerHTML = "You have 2 attempts left.";

    }
    else if (attempts == 3) {

        message.innerHTML = "You have 1 attempt left. You are locked for 5 minutes.";

        lockTime = new Date().getTime() + (5 * 60 * 1000);

    }

}