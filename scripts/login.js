// // login part
// function signin(event) {
//   event.preventDefault();
//   var email = document.getElementById("log-email").value;
//   var pass = document.getElementById("log-pass").value;
//   //   console.log(email, pass);

//   //login registered validation-->
//   var flag_Valid = false;

//   for (let i = 0; i < regdUsers.length; i++) {
//     if (regdUsers[i].email == email && regdUsers[i].password == pass) {
//       flag_Valid = true;
//       username = regdUsers[i].name;
//       localStorage.setItem("username", username);

//       break;
//     }
//   }
//   if (flag_Valid == true) {
//     alert("login successful");
//     // hiUser();
//     window.location.href = "index.html";
//     return;
//   } else {
//     alert("invalid Credentials");
//   }
// }


// Login part
document.querySelector("form").addEventListener("submit", Login);
async function Login (event) {
  event.preventDefault()
  try {
    let login_data = {
      email: document.getElementById("log-email").value,
      password: document.getElementById("log-pass").value,
    };

    let login_data_json = JSON.stringify(login_data);
    console.log(login_data_json);
    let res = await fetch("http://localhost:5000/login", {
      method: "POST",

      body: login_data_json,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log("data:", data);
    // window.location.href = "index.html";

    // getUser(login_data.name, data.token);
  } catch (err) {
   console.error(err);
  }
};

//Matching user data to login with token and username

let getUser = async (username, token) => {
  try {
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let data = await res.json();
    console.log("data:", data);

    showUser(data.username);
  } catch (err) {
    console.log(err);
  }
};
// getUser();