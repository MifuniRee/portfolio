const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phonenumberInput = document.querySelector('#phonenumber');
const addressInput = document.querySelector('#address');
const QuantityInput = document.querySelector('#Quantity');
const ProductInput = document.querySelector('#products');
const x = document.querySelector('#Product')

form.addEventListener('submit', (event) => {
    //event.preventDefault();

    validateForm();
    console.log(formValidation());
    if (formValidation() == true) {
        alert("Form has been submited");
        form.submit();
    } else {
        event.preventDefault();
    }

});

function formValidation() {
    const inputContainers = form.querySelectorAll('.form-control');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //Username
    if (usernameInput.value.trim() == '') {
        setErrorFor(usernameInput, 'Name can not be empty');
    } else if (usernameInput.value.trim().length < 5) {
        setErrorFor(usernameInput, 'Name must be min 5 charecters');
    } else {
        setSuccessFor(usernameInput);
    }

    //Email
    if (emailInput.value.trim() == '') {
        setErrorFor(emailInput, 'Provide email address');
    } else if (isEmailValid(emailInput.value)) {
        setSuccessFor(emailInput);
    } else {
        setErrorFor(emailInput, 'Provide valid email address');
    }

    //Phone Number
    if (phonenumberInput.value.trim() == '') {
        setErrorFor(phonenumberInput, 'Phone Number can not be empty');
    } else if(!phonenumberInput.value.trim().match(/^[0-9]{10}$/)){
        setErrorFor(phonenumberInput, 'Phone Number should only be 10 digits');
    } else {
        setSuccessFor(phonenumberInput);
    }

    //Address
    if (addressInput.value.trim() == '') {
        setErrorFor(addressInput, 'Address can not be empty');
    } else {
        setSuccessFor(addressInput);
    }

    //QuantityInput
    if (QuantityInput.value.trim() == '') {
        setErrorFor(QuantityInput, 'Quantity can not be empty');
    } else {
        setSuccessFor(QuantityInput);
    }
}

function setErrorFor(inputs, errorMessage) {
    const parent = inputs.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}
function setSuccessFor(inputs) {
    const parent = inputs.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}