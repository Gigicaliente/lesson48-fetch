//task1
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Ошибка:', error));


//task2
const data = { title: "Introduction", body: "Hello from Almaty", userId: 1 }

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Ошибка:', error))


// //task3
// fetch('https://jsonplaceholder.typicode.com/nonexistent')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log('Ошибочка', error))


//task4
// const data = {title: "Hello World"}

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Ошибка:', error))


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//    method: 'DELETE'
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


//task5

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data)
// } catch (error) {
//     console.error(error)
// } 
// }

// fetchData()


//task6 


fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: {
        'User-Agent': 'MyCustomUserAgent/1.0'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Ошибочка: ', error))