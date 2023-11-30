// Create an input field form
var inputFieldForm = document.createElement('form');
inputFieldForm.setAttribute('id', 'myInputForm');

var inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('name', 'myInput');
inputField.setAttribute('placeholder', 'Enter your email');

var submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Submit');

inputFieldForm.appendChild(inputField);
inputFieldForm.appendChild(submitButton);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    var email = inputField.value;
    alert('Email entered: ' + email);
}

// If not specified, it will be appended to the body
var targetElement = document.getElementById('component-6');
targetElement.appendChild(inputFieldForm);

// Add an event listener for form submission
inputFieldForm.addEventListener('submit', handleSubmit);
