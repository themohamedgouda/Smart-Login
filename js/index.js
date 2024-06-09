var loginForm = document.getElementById('loginForm')
var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")
var incorrectData = document.getElementById("incorrectData")
var userContainer = [];
if (localStorage.getItem('user') !== null) {
  userContainer = JSON.parse(localStorage.getItem('user'));
}

loginForm.addEventListener("submit",function (eventInfo) {
  eventInfo.preventDefault();
  login()
})
function login() {
  var userLogin = {
    email:emailInput.value,
    password:passwordInput.value
  }
  if (isExist(userLogin)) {
    incorrectData.classList.replace('d-block','d-none')
    setTimeout(function() {
      location.href = "./home/home.html"
    }, 0);
  }
  else{
    incorrectData.classList.replace('d-none','d-block')
  } 
}
function isExist(userData) {
  for (let i = 0; i < userContainer.length; i++) {
    if (userContainer[i].email.toLowerCase() == userData.email.toLowerCase() && userContainer[i].password == userData.password) {
      localStorage.setItem('userName',userContainer[i].name)
      return true
    }
  }
  return false;
}