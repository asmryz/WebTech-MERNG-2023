console.log(`first Function`)

fetch(`https://jsonplaceholder.typicode.com/users/1`)
.then(res => res.json())
.then(user => console.log(`second Function ${user.name}`));

console.log(`third Function`)


