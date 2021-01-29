// set local storage item

localStorage.setItem('name', 'josh');

// session storage

sessionStorage.setItem('name', 'faceless man');

const name = localStorage.getItem('name');
console.log(name);

document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);



    localStorage.setItem('task', JSON.stringify(task));
    alert('task saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task) {
    console.log(task);
});