// console.log('This is a project4');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#success').hide(); 
$('#failure').hide(); 

// console.log(name, email, phone);
name.addEventListener('blur', () => {
    // console.log('Name is blurred');
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        // console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur', () => {
    // console.log('email is blurred');
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        // console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    // console.log('phone is blurred');
    // Validate phone here
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        // console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('You clicked on submit button');

    if (validName && validEmail && validPhone) {
        // console.log('All are true submiting the form');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show(); 
    }
    else {
        // console.log('All are not true no submiting the form');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('close');
        $('#success').hide(); 
        $('#failure').show();
    }

})
