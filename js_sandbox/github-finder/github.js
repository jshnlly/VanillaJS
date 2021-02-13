class GitHub {
    constructor() {
        this.client_id = '8db860a3adb1cdd1f82d';
        this.client_secret = '280cf01d5cd2495a5cba0896d99dc0c2612801ae';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
           profile,
           repos
        }
    }
}