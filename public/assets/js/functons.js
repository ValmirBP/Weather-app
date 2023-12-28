function getWeather() {
    const cityName = document.getElementById("cityInput").value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f057813814e62a3eec31e85211e7e176`)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                coordinates: `${data.coord.lon} / ${data.coord.lat}`,
                city: data.name,
                country: data.sys.country,
                condition: data.weather[0].main,
                temperature: `${data.main.temp}°C`,
                humidity: `${data.main.humidity}%`,
                wind: `${data.wind.speed} m/s`,
                icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
            };

            displayWeather(weatherData);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(weatherData) {
    const table = document.getElementById("weatherTable");
    const row = table.insertRow(1);

    const cellCoordinates = row.insertCell(0);
    cellCoordinates.innerHTML = weatherData.coordinates;

    const cellCity = row.insertCell(1);
    cellCity.innerHTML = weatherData.city;

    const cellCountry = row.insertCell(2);
    cellCountry.innerHTML = weatherData.country;

    const cellCondition = row.insertCell(3);
    cellCondition.innerHTML = weatherData.condition;

    const cellIcon = row.insertCell(4);
    const icon = document.createElement("img");
    icon.src = weatherData.icon;
    cellIcon.appendChild(icon);

    const cellTemperature = row.insertCell(5);
    cellTemperature.innerHTML = weatherData.temperature;

    const cellHumidity = row.insertCell(6);
    cellHumidity.innerHTML = weatherData.humidity;

    const cellWind = row.insertCell(7);
    cellWind.innerHTML = weatherData.wind;
}
