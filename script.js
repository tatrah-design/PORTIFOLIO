// Contact Form

let form = document.getElementById("contactForm");
let result = document.getElementById("result");

form.onsubmit = function(event) {

    // Stop the form from refreshing the page
    event.preventDefault();

    // Get information entered by the user
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if a field is empty
    if (name == "" || email == "" || message == "") {

        result.innerHTML = "Please fill in all the fields.";

    } else {

        result.innerHTML =
            "Thank you, " + name + ". Your message has been received.";
    }
};


// Display the current year

let year = new Date().getFullYear();

document.getElementById("year").innerHTML = year;
