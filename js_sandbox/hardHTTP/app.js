const http = new HardHTTP;

// get users
// http.get('https://api.github.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log());

// user data
const data = {
    login: 'josh',
    id: 1,
    node_id: '2liffbr934'
}

// create post
http.post('https://api.github.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log());

    http.put('https://api.github.com/users', data)
        .then(data => console.log(data))
        .catch(err => console.log());

    http.put('https://api.github.com/users', data)
        .then(data => console.log(data))
        .catch(err => console.log());