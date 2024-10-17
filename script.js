const API_KEY = '32ec2900a42802121648843c01233250'; // Your OpenWeatherMap API key
const CITY = 'Seattle'; // Replace with your desired city

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=imperial&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeather(data) {
    const location = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°F`;
    document.getElementById('icon').src = icon;
    document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
}

function startWeatherUpdates() {
    fetchWeather(); // Initial fetch
    setInterval(fetchWeather, 60000); // Update every 60 seconds
}

window.onload = startWeatherUpdates;
