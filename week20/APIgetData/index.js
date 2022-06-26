fetch("https://api.github.com/users/altarin")
.then(response => response.json())
.then(user => console.log(user))
.catch(error => console.log(error));

