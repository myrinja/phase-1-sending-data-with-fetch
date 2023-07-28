/*

//submit data function
function submitData (name,email){
  const newUser = {
    name:name,
    email:email
  };
    



fetch("http://localhost:3000/users",
{
  method:'POST',
  headers: {
    'content-type':'application/json',
    "Accept": "application/json"
  },
  body:JSON.stringify(newUser)
})
//console.log(submitData())
.then(res => res())
.then(data => {
  const id = data.id;
let div = document.createElement('div')
  p = document.body.innerHTML += `<p>New ID: ${id}</p>`;
div.appendChild(p)
  return data;
})
.catch(error => {
  document.body.innerHTML += `<p>Error: ${error.message}</p>`;
});

 

};
*/

//};

/*

function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", config)
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      document.body.innerHTML += `<p>New ID: ${id}</p>`;
      return data;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}
submitData()

*/



function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", config)
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      p= document.createElement('p')
      document.body.innerHTML += `<p>New ID: ${id}</p>`;
      return data;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}
submitData()