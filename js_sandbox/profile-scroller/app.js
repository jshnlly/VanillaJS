const data = [
    {
        name: 'Josh Bording',
        age: 22,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Detroit',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    {
        name: 'Julia Werner',
        age: 35,
        gender: 'Female',
        lookingfor: 'Female',
        location: 'Houston',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Jake Freeman',
        age: 28,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Miami',
        image: 'https://randomuser.me/api/portraits/men/91.jpg'
    }
];

const profiles = profileIterator(data);

// start with profile 
nextProfile();

// next event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.querySelector('.profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
        `;

        document.querySelector('.imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        window.location.reload();
    }
}

// profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }

        }
    };
}