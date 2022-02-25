// sign up process part 
var userStack =
JSON.parse(localStorage.getItem("userDataBase")) || [];

  document.querySelector("#submit").addEventListener("submit", function (event) {

  event.preventDefault();

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#pass").value;

  function userData(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  let user = new userData(name, email, password);

  userStack.push(user);
  alert("Registration Successfully");

  
  window.location.href = "login.html";



  console.log(userStack);
  localStorage.setItem("userDataBase", JSON.stringify(userStack));
});



