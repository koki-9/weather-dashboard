async function fetchWeather() {
    try {
        const response = await fetch('https://api.weather.com/v3/wx/conditions/current?apiKey=YOUR_API_KEY&language=en-US&format=json');
        const data = await response.json();
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.temp}°F`;
        document.getElementById('icon').src = `https://weather.com/icons/${data.icon}.png`;
        document.getElementById('description').textContent = data.weather;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

window.onload = fetchWeather;
