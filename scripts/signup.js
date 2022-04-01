//api link - https://masai-api-mocker.herokuapp.com/ //register api link --> https://masai-api-mocker.herokuapp.com/auth/register //Login api link --> https://masai-api-mocker.herokuapp.com/auth/login

//   Registering user
document.querySelector("form").addEventListener("submit", Register);
async function Register(event){
  event.preventDefault()
  try {
    let register_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("num").value,
      password: document.getElementById("pass").value,
    };
    register_data = JSON.stringify(register_data);
console.log({regiseter : register_data});
    let res = await fetch(
      "http://localhost:5000/register",
      {
        method: "POST",
        body: register_data,

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await res.json();

    if(data){

      console.log(data);
      alert("congratulations! your sign-up has successful.")
    }
    window.location.href = "login.html";
  } catch (err) {
    alert(err.message)
    console.log(err.message);
  }
};




let showuser = document.getElementById("showuser");
function showUser(data) {
  let user = "Username:" + " " + data;
  if (data != undefined) {
    showuser.textContent = null;
    showuser.append(user);
  }
}
// container.append(user)
