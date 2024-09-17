/*
// THIS IS WHAT WE DID ON DAY 1

// below is our first js code to test whether js is linked appropriately and is working well as well

//alert("Welcome to the Welcome page!")

// Selecting an entire form by ID name...
const registerForm = document.getElementById('register-form'); // note that "const" can be replaced by "let" in this case...

// handling our form's SubmitEvent...
registerForm.onsubmit = function() {
    // collect user name...
    // collect email...
    // collect password...
    // save user info...
    // send configuration email...
}

*/

// THIS IS WHAT WE DID ON DAY 2

// select form by id
const registerForm = document.querySelector('#register-form');
console.log(registerForm);
const h1 = document.createElement('h1');
h1.innerText = "I will not mess up!";
// document.body.appendChild(h1);
// document.body.innerHTML = "<h1> Don't try this @Home!";
// handle form submit event
registerForm.addEventListener('Submit',function() {
    // collect username
    // collect email
    // collect password
    // save user info
    // send configuration email...
})

// declare age variable
const userAge = 44;

// square of age...

function squareAge(userAge) {
    const squaredAge = userAge ** 2;
    return squaredAge;
}


console.log(squareAge(userAge));

console.log('');
const squaredAge = squareAge(45);
console.log(squaredAge);
