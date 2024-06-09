var nameInput = document.getElementById("nameInput")
var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")
var nameAlert = document.getElementById("nameAlert")
var emailAlert = document.getElementById("emailAlert")
var passwordAlert = document.getElementById("passwordAlert")
var exitAlert = document.getElementById("exitAlert")
var successAlert = document.getElementById("successAlert")
var signUpForm = document.getElementById("signUpForm")
var usercontainer = []
if (localStorage.getItem('user') !== null) {
  usercontainer = JSON.parse(localStorage.getItem('user'));
}
signUpForm.addEventListener('submit' , function(eventInfo)
{
  eventInfo.preventDefault()
  addUsers()

})
function isAlreadyHere(users) {

  for (let i = 0; i < usercontainer.length; i++) {

    if (usercontainer[i].email.toLowerCase() === users.email.toLowerCase()) {
      console.log("Email is exist");
      return true
    }
  }
  return false;
}
function addUsers() {
  var users = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };
  
  if (isAlreadyHere(users)) {
    exitAlert.classList.replace('d-none', 'd-block');
  } else {
    if (validateInput()) {
      usercontainer.push(users);
      setTimeout(function() {
        window.location.href="../index.html" 
      }, 2000);
      localStorage.setItem('user', JSON.stringify(usercontainer));
      exitAlert.classList.replace('d-block', 'd-none');
      // Redirect after a delay of 2 seconds (2000 milliseconds)

    }
  }
}

function validateInput() {
  var namePattern = /^[a-zA-Z'-]{2,}$/;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z\d\W\_]{8,}$/;
  var flag = 0;
  if(namePattern.test(nameInput.value)) {
    nameAlert.classList.replace('d-block','d-none')
    flag++
  }
  else{
    nameAlert.classList.replace('d-none','d-block')

    flag = 0
  }
  if(emailPattern.test(emailInput.value)) {
    emailAlert.classList.replace('d-block','d-none')
    flag++
  }
  else{
    emailAlert.classList.replace('d-none','d-block')
    flag = 0
  }
  if(passwordPattern.test(passwordInput.value)) {
    passwordAlert.classList.replace('d-block','d-none')
    flag++
  }
  else{
    passwordAlert.classList.replace('d-none','d-block')
    flag = 0
  }

  if (flag == 3) {
    successAlert.classList.replace('d-none','d-block')
    return true
  }
  else{
    successAlert.classList.replace('d-block','d-none')
    return false
  }
}

