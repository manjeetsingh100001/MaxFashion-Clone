 // login part 
 document.querySelector("form").addEventListener("submit", signin);

 var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));
 // console.log(regdUsers);
 
 function signin(event) {
   event.preventDefault();
   var email = document.getElementById("log-email").value;
   var pass = document.getElementById("log-pass").value;
   //   console.log(email, pass);
 
 
   //login registered validation-->
   var flag_Valid = false;
 
   for (let i = 0; i < regdUsers.length; i++) {
     if (regdUsers[i].email == email && regdUsers[i].password == pass) {
       flag_Valid = true;
       break;
     }
   }
   if (flag_Valid == true) {
     alert("login successful");
     window.location.href = "index.html";
     return;
   }
   else{
     alert("invalid Credentials")
   }
 }