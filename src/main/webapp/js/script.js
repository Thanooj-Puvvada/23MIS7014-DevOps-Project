window.addEventListener("load", function () {

    if (!sessionStorage.getItem("visited")) {

        alert("Welcome to Tech Symposium 2026!");

        sessionStorage.setItem("visited", "true");

    }

    updateDateTime();

    setInterval(updateDateTime, 1000);

});


function updateDateTime() {

    const element = document.getElementById("datetime");

    if (element) {

        const now = new Date();

        element.innerHTML = now.toLocaleString();

    }

}


// Registration Form Validation
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let agree = document.getElementById("agree");

    if (name === "") {

        alert("Please enter your full name.");

        return false;

    }

    if (email === "") {

        alert("Please enter your email address.");

        return false;

    }

    if (!agree.checked) {

        alert("Please confirm that the information provided is correct.");

        return false;

    }

    alert("🎉 Registration Successful!\n\nThank you for registering for Tech Symposium 2026.");

    document.querySelector("form").reset();

    return false;

}