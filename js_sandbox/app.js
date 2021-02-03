const posts = [
    {title: 'Post one', body: 'this is post one'},
    {title: 'Post one', body: 'this is post one'}
];

// function createPost() {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         }, 1000);

//         document.body.innerHTML = output;
//     });
// }

// createPost({title: 'post three', body: 'this is post three'});

// getPosts();

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        }, 1000);

        document.body.innerHTML = output;
    });
}

createPost({title: 'post three', body: 'this is post three'}, getPosts);