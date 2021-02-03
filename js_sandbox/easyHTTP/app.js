const http = new easyHTTP;

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts) {

//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// create data

const data = {
    title: 'Custom post',
    body: 'this is a custom post'
};

// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

// delete post
http.get('https://jsonplaceholder.typicode.com/posts/1', 
function(err, response) {

    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

