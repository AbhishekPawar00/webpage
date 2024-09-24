let storedUsers = JSON.parse(localStorage.getItem("users")) || []; let initialUsers = storedUsers; 
localStorage.setItem("users", JSON.stringify(initialUsers)); let displayData = () =>  
{   let tbody = document.getElementById("tbody");   tbody.innerHTML = "";   let storedUser = JSON.parse(localStorage.getItem("users"));   storedUser.map( 
    (user, index) => 
      (tbody.innerHTML += ` 
                <tr> 
                    <td>${index + 1}</td> 
                    <td>${user.name}</td> 
                    <td>${user.email}</td> 
                    <td>${user.gender}</td> 
                    <td>${user.state}</td>
                    <td>${user.city}</td>
                    <td>${user.address}</td>
                    <td>${user.password}
                </tr>`)
  ); }; displayData();

let btn = document.getElementById("btn"); btn.addEventListener("click", () =>
{   const email = document.getElementById("email").value;   const gender = document.getElementById("gender").value;   const password = document.getElementById("password").value;   const name = document.getElementById("name").value;   const city = document.getElementById("city").value;   const address = document.getElementById("address").value; const state = document.getElementById("state");

  let storedUser = JSON.parse(localStorage.getItem("users"));   let newUser =
{     name,     email,     gender,     state, city, address,  password
  };
  storedUser.unshift(newUser);   localStorage.setItem("users", JSON.stringify(storedUser));   displayData(); 
}); 
