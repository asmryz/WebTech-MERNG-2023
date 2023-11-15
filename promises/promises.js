function first() {
    return new Promise((resolve, reject) => {
        resolve(`first Function`);
    })
}


function second() {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => res.json())
            .then(user => resolve(`second Function ${user.name}`))
    })
}

function third() {
    return new Promise((resolve, reject) => {
        resolve(`third Function`)
    })
}

first()
    .then(data => console.log(data))
    .then(() => second().then(data => console.log(data))
        .then(() => third().then(data => console.log(data))
        )
    )

// first().then(data => {
//     console.log(data)
//     second().then(data => {
//         console.log(data)
//         third().then(data => console.log(data))
//     })
// })



