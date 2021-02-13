class Weather {
    constructor(city, state) {
        this.apiKey= 'd9191198fe18a6c7483a6b5fa16f07af';
        this.city = city;
        this.state = state;
    }

    // fethc from weatherAPI

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData.main;
    }

    //change weather loc
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}

