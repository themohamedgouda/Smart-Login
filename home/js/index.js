var nameUserLogin = document.getElementById("nameUserLogin")
var logOutBtn = document.getElementById("logOutBtn")
var nameUser = localStorage.getItem('userName');
 nameUserLogin.innerHTML = nameUser;
 logOutBtn.addEventListener('click' , function(){
    localStorage.removeItem('userName')
 })