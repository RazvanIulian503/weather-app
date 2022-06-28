let weather = {
    apiKey : '335c0fca2743ec9ec0eea27b3f3f7f7a',
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind speed " + speed + "km/h";
        document.querySelector('.weather').classList.remove('loading');

        // SET BACKGROUND POSITION

        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

        // SET BACKGROUND IMAGES FOR TEMPERATURE

        if(temp <= 0){
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516569422572-d9e0514b9598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" 
        } else if(temp > 0 && temp <= 15) {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1515137009-110da79c0d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')" 
        } else if(temp > 15 && temp <= 26) {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1452711932549-e7ea7f129399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80')" 
        } else if(temp > 26) {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" 
        }
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};


document.querySelector('.search a').addEventListener('click', function() {
    weather.search();
})

document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather('denver');