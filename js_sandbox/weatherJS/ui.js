class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.visibiility = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.description;
        this.string.textContent = weather.temp;
        this.icon.setAttribute('src', weather.icon); 
        this.humidity.textContent = `Relative Humidity: ${weather.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.feels_like}`;
        this.visibility.textContent = `Visibility: ${weather.visibility}`;
        this.wind.textContent = `Relative Humidity ${weather.speed}`;
    }
}