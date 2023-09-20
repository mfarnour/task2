
var users = [];

// Check if users array exists in localStorage
if (localStorage.getItem('users')) {
  try {
    // Retrieve users array from localStorage
    users = JSON.parse(localStorage.getItem('users'));
  } catch (error) {
    console.error('Error parsing users from localStorage:', error);
    // Handle the error as per your requirement
  }
}

function saveUsers() {
  // Save users array to localStorage
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users to localStorage:', error);
    // Handle the error as per your requirement
  }
}
function signup(event) {
    //event.preventDefault();
    
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if username already exists
    if (users.find(user => user.username === username)) {
      alert('Username already exists!');
      return;
    }
    
    // Create user object
    var user = {
      username: username,
      password: password
    };
    
    // Add user object to the array
    users.push(user);
    console.log(users);
    
    // Save users array to localStorage
    saveUsers();
    
    window.location.href = 'login.html';
  }
  
  // function login(event) {
  //  // event.preventDefault();
    
  //   // Get input values
  //   var loginUsername = document.getElementById('login-username').value;
  //   var loginPassword = document.getElementById('login-password').value;
    
  //   // Find user object with matching username
  //   var user = users.find(user => user.username === loginUsername);
    
  //   // Check if user exists and password is correct
  //   if (user && user.password === loginPassword) {
  //     // Redirect to home page
  //     window.location.href = 'home.html';
  //   } else {
  //     alert('Invalid login credentials!');
  //   }
  // }

  //API fetch
  //http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid={9ceb4f523e67d7905fb84a5ffaaf10b2}
 // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//   const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': '1d97727c2emsh395b1bbd5bf0363p1d950djsna80eb6e08709',
//           'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//       }
//   };
  
//   try {
//       const response = fetch(url, options);
//       const result = response.then(data => {
//         // Code to handle the data
//         const weatherDiv = document.getElementById('weather');
//       const temp = data.status - 273.15; // Convert temperature to Celsius
//       const description = data.weather[0].description;
//       weatherDiv.innerHTML = `Current temperature: ${temp.toFixed(1)}&deg;C <br> Weather description: ${description}`;
//     })

      
//       console.log(result);
//   } catch (error) {
//       console.error(error);
//   }
///////////////////////////
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
      return response.json();
  })
  .then(data => {
      // Code to handle the data
      const weatherDiv = document.getElementById('weather');
       console.log(data.title,'datadata')
      const temp = data.status - 273.15; // Convert temperature to Celsius
      //const description = data.JSON;
     // weatherDiv.innerHTML = `title: ${data.title}`;  
  })
  .catch(error => {
      console.error(error);
  });
// //
//   const url = 'https://weatherapi-com.p.rapidapi.com/timezone.json?q=%3CREQUIRED%3E';
// const option = {
// 	method: 'GET',
// 	headers: {
        
// 		'X-RapidAPI-Key': '1d97727c2emsh395b1bbd5bf0363p1d950djsna80eb6e08709',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = fetch(url, options);
// 	const result = response.then(data => {
//                console.log(data);
//     // Code to handle the data
//                const weatherDiv = document.getElementById('weather');
//                const temp = data.status - 273.15; // Convert temperature to Celsius
//                const description = data.status.toString();
//                weatherDiv.innerHTML = `Current temperature: ${temp.toFixed(1)}&deg;C <br> Weather description: ${description}`;  
//            })
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))






// api url
// const api_url =
// 	"https://jsonplaceholder.typicode.com/todos/1";

// // Defining async function
// async function getapi(url) {

// 	// Storing response
// 	const response = fetch(url);

// 	// Storing data in form of JSON
// 	var data = response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<tr>
// 		<th>User Id</th>
// 		<th>Id</th>
// 		<th>Title</th>
// 		<th>Completed</th>
// 		</tr>`;

// 	// Loop to access all rows
// 	for (let r of data.list) {
// 		tab += `<tr>
// 	<td>${r.userId} </td>
// 	<td>${r.id}</td>
// 	<td>${r.title}</td>
// 	<td>${r.completed}</td>		
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("employees").innerHTML = tab;
// }




// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then(data => {
//     console.log(data);
//     document.getElementById("weather").CDATA_SECTION_NODE = data;
//     document.getElementById('weather').display.JSON = data;
//     //displayCocktail(data);
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));
//   function show(data) {
//     let tab =
//         `<tr>
//           <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;
   
//     // Loop to access all rows
//     for (let r of data.list) {
//         tab += `<tr>
//     <td>${r.name} </td>
//     <td>${r.office}</td>
//     <td>${r.position}</td>
//     <td>${r.salary}</td>         
// </tr>`;
//     }





//search in countries
const search = document.getElementById('search');
const select = document.getElementById('myselect');
const options = select.options;
search.addEventListener('input', () => {
    const searchValue = search.value.toLowerCase();

    for (let i = 0; i < options.length; i++) {
        const text = options[i].text.toLowerCase();
        const value = options[i].value.toLowerCase();

        if (text.includes(searchValue) || value.includes(searchValue)) {
            options[i].style.display = 'block';
        } else {
            options[i].style.display = 'none';
        }
    }
});

