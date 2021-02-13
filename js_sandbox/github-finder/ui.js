class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="class" card-body mb-3>
                <div class="row">
                    <div class="col=md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"><div>
        `;
    }

    showRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
                output += `
                <div>
                    <div>
                        <div>
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>

                        <div>
                            <span class="badge badge-primary">Public Stars: ${repos.stargazers_count}</span>
                            <span class="badge badge-secondary">Public Watchers: ${repos.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repos.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
            });

        // output repos
        document.getElementById('repos').innerHTML = output;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(message, className) {
        // clear remaining alerts
        this.clearAlert();

        //create dive
        const div = document.createElement('div');

        // add class
        div.className = className;

        // add text
        div.appendChild(document.createTextNode(message));

        // get parent
        const container = document.querySelector('.searchContainer');

        // get search box
        const search = document.querySelector('search');

        // insert alert
        container.insertBefore(div, search);

        // timeout after 3 sec

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    
    // clear alert message
    clearAlert() {
        const currentAlert = docuement.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }
}